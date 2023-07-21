import { useState, useEffect } from "react";
import { SearchInput, SearchWrapper } from "./styles/SearchBarStyles";
import { useBreedsData } from "../../hooks/hooks";

interface BarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface SuggestionsProps {
  quantity: number;
}

let dogBreeds: string[];

const SearchBar = ({ setSearchValue }: BarProps) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(useBreedsData());

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

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <SearchWrapper>
        <SearchInput
          type="Search"
          placeholder="Search breed..."
          value={value}
          onChange={handleSearchInputChange}
        />
      </SearchWrapper>
      {/* {result && <SearchResult result={result} />} */}
    </>
  );
};

export default SearchBar;
