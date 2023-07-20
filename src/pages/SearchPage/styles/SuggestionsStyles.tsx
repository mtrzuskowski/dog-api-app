import styled from "styled-components";

import { ContainerProps } from "../Suggestions";

export const SuggestionsContainer = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SuggestionsWrapper = styled.div<ContainerProps>`
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

export const ImgContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40%;
`;

export const ImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const SuggestionImg = styled.img`
  height: fit-content;
  width: fit-content;
  border-radius: 50%;
`;

export const SuggestionText = styled.p`
  color: #cecccc;
  font-size: 26px;
`;
