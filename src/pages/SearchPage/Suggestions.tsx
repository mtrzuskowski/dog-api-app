import { useState, useEffect } from "react";
import { useBreedsData, useFullDogsData } from "../../hooks/hooks";
import {
  SuggestionsWrapper,
  SuggestionWrapper,
  SuggestionText,
  SuggestionImg,
  ImgContainer,
  ImgWrapper,
} from "./styles/SuggestionsStyles";

export interface ContainerProps {
  quantity: number;
}

interface SuggestionsProps {
  searchInput: string;
}

let dogBreeds: string[];

const Suggestions = ({ searchInput }: SuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<string[]>(useBreedsData());
  const dogsFullData = useFullDogsData();

  useEffect(() => {
    dogBreeds = suggestions;
  }, []);

  useEffect(() => {
    if (searchInput === "") {
      let tmpSuggestions = [];
      for (let i = 0; i < 3; i++) {
        tmpSuggestions.push(
          dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
        );
      }
      setSuggestions(tmpSuggestions);
      return;
    }
    const tmpSuggestions = dogBreeds.filter((breed) =>
      breed.includes(searchInput as string)
    );
    setSuggestions(tmpSuggestions);
  }, [searchInput]);

  return (
    <SuggestionsWrapper quantity={suggestions.length}>
      {suggestions.map((suggestion, i) => {
        return (
          <SuggestionWrapper key={suggestion}>
            <ImgContainer>
              <ImgWrapper>
                <SuggestionImg src={dogsFullData[i].imgUrl} />
              </ImgWrapper>
            </ImgContainer>
            <SuggestionText>{suggestion}</SuggestionText>
          </SuggestionWrapper>
        );
      })}
    </SuggestionsWrapper>
  );
};

export default Suggestions;
