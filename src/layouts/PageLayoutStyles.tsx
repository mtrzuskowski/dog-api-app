import styled from "styled-components";
import { NavLink } from "react-router-dom";
import OvalSvg from "../components/OvalSvg";

export const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const PageHeader = styled.header`
  position: sticky;
  grid-auto-columns: 50% 50%;
  height: 4em;
  width: 100%;
  top: 0;
  background-color: #f6b662;
`;

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Link = styled(NavLink)`
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
  filter: ("#goo");
  &:before {
    width: 5vw;
    height: 5vh;
    position: absolute;
    content: "";
    display: inline-block;
    background: #1f1e2a;
    border-radius: 50%;
    transition: transform 1s ease;
    left: 50%;
    top: 50%;
    transform: translate(100%, 50%);
    z-index: -1;
  }
`;

export const LinkText = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  color: #1f1e2a;
`;

export const Oval = styled(OvalSvg)`
  background-color: red;
  width: 10px;
  display: inline-block;
`;
