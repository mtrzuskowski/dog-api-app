import SearchBar from "./SearchBar";
import { useState } from "react";
import Suggestions from "./Suggestions";
import { SearchPageContainer } from "./styles/SearchPageStyles";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SearchPageContainer>
      <SearchBar setSearchValue={setSearchInput} />
      <Suggestions searchInput={searchInput} />
    </SearchPageContainer>
  );
};

export default SearchPage;
