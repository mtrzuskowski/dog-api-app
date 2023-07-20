import { styled } from "styled-components";
import { SuggestionsProps } from "../SearchBar";

export const SearchPageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 90vh;
  position: relative;
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: 10vh;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 8em;
  position: relative;
  height: 8vh;
  background: none;
  border: 4px solid #f6b660;
  border-radius: 2rem;
  box-sizing: border-box;
  font-size: 26px;
  color: #f6b660;
  outline: none;
  transition: 0.2s ease-in-out;

  &:focus {
    background: #3b3640;
    border-radius: 10px;
  }
`;

export const Suggestions = styled.div<SuggestionsProps>`
  background-color: #1f1e2a;
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-rows: ${({ quantity }) => `repeat(${quantity}, 20vh)`};
  z-index: 10;
`;

export const SuggestionWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 1px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: #2c2b34;
  }
`;

export const SuggestionText = styled.p`
  color: #cecccc;
  font-size: 26px;
`;
