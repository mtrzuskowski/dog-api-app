import { useState, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { DogInfoList } from "../../App";
import {
  SearchPageContainer,
  SearchInput,
  SearchWrapper,
  SuggestionWrapper,
  Suggestions,
  SuggestionText,
} from "./styles/SearchBarStyles";
import SearchResult from "./SearchResult";

export interface SuggestionsProps {
  quantity: number;
}

let dogBreeds: string[];

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(
    (useRouteLoaderData("0") as DogInfoList).map((breedInfo) => {
      return breedInfo.breed;
    })
  );
  const [result, setResult] = useState<string | undefined>("");

  useEffect(() => {
    dogBreeds = suggestions;
  }, []);

  useEffect(() => {
    if (value === "") {
      let tmpSuggestions = [];
      for (let i = 0; i < 3; i++) {
        tmpSuggestions.push(
          dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
        );
      }
      setSuggestions(tmpSuggestions);
      return;
    }
    const tmpSuggestions = dogBreeds.filter((breed) => breed.includes(value));
    setSuggestions(tmpSuggestions);
  }, [value]);

  const findResult = (breed: string) => {
    setResult(suggestions.find((suggestion) => suggestion === breed));
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchPageContainer>
        <SearchWrapper>
          <SearchInput
            type="Search"
            placeholder="Search breed..."
            value={value}
            onChange={handleSearchInputChange}
          />
        </SearchWrapper>
        <Suggestions quantity={suggestions.length}>
          {suggestions.map((suggestion) => {
            return (
              <SuggestionWrapper
                key={suggestion}
                onClick={() => {
                  findResult(suggestion);
                }}
              >
                <SuggestionText>{suggestion}</SuggestionText>
              </SuggestionWrapper>
            );
          })}
        </Suggestions>
      </SearchPageContainer>
      {/* {result && <SearchResult result={result} />} */}
    </>
  );
};

export default SearchBar;
