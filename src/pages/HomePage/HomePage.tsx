import { useRouteLoaderData } from "react-router-dom";
import {
  HomePageContainer,
  BreedListContainer,
  BreedListWrapper,
  BreedWrapper,
  BreedText,
} from "./HomePageStyles";
import { DogInfoList } from "../../App";

export interface ListProps {
  $listLength: number;
}

const HomePage = () => {
  const dogInfoList = useRouteLoaderData("0") as DogInfoList;
  return (
    <HomePageContainer>
      <BreedListContainer>
        <BreedListWrapper $listLength={dogInfoList.length}>
          {dogInfoList.map((dogInfo) => {
            return (
              <BreedWrapper key={dogInfo.breed}>
                <BreedText>{dogInfo.breed}</BreedText>
              </BreedWrapper>
            );
          })}
        </BreedListWrapper>
      </BreedListContainer>
    </HomePageContainer>
  );
};

export default HomePage;
