import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { DogInfoList } from "../../App";
import {
  SearchContainer,
  SearchInput,
  Suggestion,
  Suggestions,
} from "./styles/SearchBarStyles";
import SearchResult from "./SearchResult";

export interface SuggestionsProps {
  hidden: boolean;
}

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(
    (useRouteLoaderData("0") as DogInfoList).map((breedInfo) => {
      return breedInfo.breed;
    })
  );
  const [hideSuggestions, setHideSuggestions] = useState<boolean>(true);
  const [result, setResult] = useState<string | undefined>("");

  const findResult = (breed: string) => {
    console.log("Hej");
    setResult(suggestions.find((suggestion) => suggestion === breed));
  };

  const handleFocus = () => {
    setHideSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="Search"
          placeholder="Search breed..."
          value={value}
          onChange={handleSearchInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Suggestions hidden={hideSuggestions}>
          {suggestions.map((suggestion) => {
            return (
              <Suggestion
                key={suggestion}
                onClick={() => {
                  console.log("suggestion");
                }}
              >
                {suggestion}
              </Suggestion>
            );
          })}
        </Suggestions>
      </SearchContainer>
      {result && <SearchResult result={result} />}
    </>
  );
};

export default SearchBar;
