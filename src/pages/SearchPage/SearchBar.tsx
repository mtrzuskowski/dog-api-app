import { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import axios from "axios";
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

let dogBreeds: string[];

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(
    (useRouteLoaderData("0") as DogInfoList).map((breedInfo) => {
      return breedInfo.breed;
    })
  );
  const [hideSuggestions, setHideSuggestions] = useState<boolean>(true);
  const [result, setResult] = useState<string | undefined>("");

  useEffect(() => {
    dogBreeds = suggestions;
  }, []);

  useEffect(() => {
    if (value === "") {
      setSuggestions(suggestions);
      return;
    }
    const tmpSuggestions = dogBreeds.filter((breed) => breed.includes(value));
    setSuggestions(tmpSuggestions);
  }, [value]);

  const findResult = (breed: string) => {
    setResult(suggestions.find((suggestion) => suggestion === breed));
  };

  const handleFocus = () => {
    setHideSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 400);
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
          onBlur={async () => {
            handleBlur();
          }}
        />
        <Suggestions hidden={hideSuggestions}>
          {suggestions.map((suggestion) => {
            return (
              <Suggestion
                key={suggestion}
                onClick={() => {
                  findResult(suggestion);
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
