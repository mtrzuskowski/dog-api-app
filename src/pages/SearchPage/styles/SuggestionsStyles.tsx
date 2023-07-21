import styled from "styled-components";

import { ContainerProps } from "../Suggestions";
export const SuggestionsContainer = styled.div<ContainerProps>`
  background-color: #1f1e2a;
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-rows: ${({ $quantity }) => `repeat(${$quantity}, 20vh)`};
  z-index: 10;
`;

export const SuggestionWrapper = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ". . img breed breed breed .";
  grid-row-gap: 0.5em;
  text-align: center;
  &:hover {
    background-color: #2c2b34;
  }
`;

export const ImgContainer = styled.div`
  grid-area: img;
  align-self: center;
  justify-self: center;
  position: relative;
  height: 18vh;
  width: 18vh;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
`;

export const SuggestionImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const BreedNameWrapper = styled.div`
  grid-area: breed;
  position: relative;
  height: 100%;
  width: 80%;
`;

export const BreedName = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #cecccc;
  font-size: 26px;
`;
