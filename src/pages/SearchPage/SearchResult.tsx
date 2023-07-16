import { useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import { DogInfoList, DogInfo } from "../../App";

interface SearchProps {
  result: string;
}

const SearchResult = ({ result }: SearchProps) => {
  const dogInfoList = useRouteLoaderData("0") as DogInfoList;
  const [foundItem, setFoundItem] = useState<undefined | DogInfo>(undefined);
  setFoundItem(
    dogInfoList.find((dog) => {
      return dog.breed === result;
    })
  );
  return (
    <div>
      {foundItem !== undefined ? (
        <div>{`${foundItem!.breed}`}</div>
      ) : (
        <div> Sadge, no doggo</div>
      )}
    </div>
  );
};

export default SearchResult;
