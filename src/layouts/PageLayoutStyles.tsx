import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";
import { LinkProps } from "./PageLayout";
import { Svg } from "../components/OvalFilter/OvalSvg";
export const PageWrapper = styled.div`
  position: relative;
`;

export const PageHeader = styled.header`
  position: sticky;
  grid-auto-columns: 50% 50%;
  height: 10vh;
  width: 100%;
  top: 0;
  background-color: #f6b662;
  z-index: 1;
`;

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const gooAnimationAppear = keyframes`
  0% {
    transform : translate(-50%, 70%) scale(0);
  }

  100% {
    transform: translate(-50%, 70%) scale(1);
  }
`;

const gooAnimationDisappear = keyframes`
  0% {
    transform: translate(-50%, 70%) scale(1);
  }
  
  100% {
    transform : translate(-50%, 70%) scale(0);
  }
`;

export const Link = styled(NavLink)<LinkProps>`
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;

  &:hover ${Svg} {
    animation: ${({ $active }) =>
      $active
        ? "none"
        : css`
            ${gooAnimationAppear} 1s ease;
          `};
    animation-fill-mode: forwards;
  }

  & ${Svg} {
    animation: ${({ $active }) =>
      $active
        ? "none"
        : css`
            ${gooAnimationDisappear} 1s ease;
          `};
    animation-fill-mode: forwards;
    transform: ${({ $active }) =>
      $active
        ? "translate(-50%, 60%) scale(1);"
        : "translate(-50%, 60%) scale(0);"};
  }
`;

export const NavIconWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  font-size: 2em;
  height: 8vh;
  width: 8vh;
  color: #2a82f4;
`;

export const MainContentContainer = styled.main`
  position: relative;
  width: 100%;
`;
