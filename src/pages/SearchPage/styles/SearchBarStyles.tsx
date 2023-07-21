import { styled } from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const SearchInput = styled.input`
  position: relative;
  width: 8em;
  height: 8vh;
  margin-bottom: 1vh;
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

  &::placeholder {
    text-align: center;
  }
`;
