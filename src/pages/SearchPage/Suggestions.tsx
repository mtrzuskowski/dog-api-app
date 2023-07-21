import { useState, useEffect } from "react";
import { useBreedsData, useFullDogsData } from "../../hooks/hooks";
import {
  SuggestionsContainer,
  SuggestionWrapper,
  SuggestionImg,
  BreedNameWrapper,
  BreedName,
  ImgContainer,
  ImgWrapper,
} from "./styles/SuggestionsStyles";

export interface ContainerProps {
  $quantity: number;
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
  console.log(dogsFullData);

  return (
    <SuggestionsContainer $quantity={suggestions.length}>
      {suggestions.map((suggestion) => {
        return (
          <SuggestionWrapper key={suggestion}>
            <ImgContainer>
              <ImgWrapper>
                <SuggestionImg
                  src={
                    dogsFullData.find((dog) => suggestion === dog.breed)?.imgUrl
                  }
                />
              </ImgWrapper>
            </ImgContainer>
            <BreedNameWrapper>
              <BreedName>{suggestion}</BreedName>
            </BreedNameWrapper>
          </SuggestionWrapper>
        );
      })}
    </SuggestionsContainer>
  );
};

export default Suggestions;
