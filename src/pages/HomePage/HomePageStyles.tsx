import styled from "styled-components";
import { ListProps } from "./HomePage";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const BreedListContainer = styled.section`
  height: 100%;
  width: 80%;
`;

export const BreedListWrapper = styled.div<ListProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ $listLength }) => `repeat(${$listLength}, 3em)`};
`;

export const BreedWrapper = styled.div`
  display: flex;
  padding: 1em;
  justify-content: center;
  align-items: center;
`;

export const BreedText = styled.p`
  color: #b4b1b1;
`;
