import { styled } from "styled-components";
import { SuggestionsProps } from "../SearchBar";
export const SearchContainer = styled.div`
  width: 30rem;
  position: relative;
`;

export const SearchInput = styled.input`
  border: 1px solid #f3f3f3;
  height: 2rem;
  box-sizing: border-box;
  padding: 1px 10px;
  outline: none;
  transition: 0.2s ease-in-out;

  &:focus {
    transition: 0.2s ease-in-out;
    border: 1px solid blue;
  }
`;

export const Suggestions = styled.div<SuggestionsProps>`
  overflow-y: scroll;
  border: 1px solid #f3f3f3;
  background-color: white;
  max-height: 20rem;
  width: 100%;
  height: fit-content;
  position: absolute;
  z-index: 10;
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
`;

export const Suggestion = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 1px 10px;
  height: 2rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f3f3f3;
  }
`;
