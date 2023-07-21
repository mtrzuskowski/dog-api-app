import { Outlet } from "react-router-dom";
import {
  PageWrapper,
  PageHeader,
  Nav,
  Link,
  NavIconWrapper,
  MainContentContainer,
} from "./PageLayoutStyles.js";
import OvalSvg from "../components/OvalFilter/OvalSvg.js";
import { useState } from "react";
import { PiDog } from "react-icons/pi";
import { BiSolidSearch } from "react-icons/bi";

export interface LinkProps {
  name: string;
  $active: boolean;
}

const PageLayout = () => {
  const [activeButton, setActiveButton] = useState("home");

  return (
    <PageWrapper>
      <PageHeader>
        <Nav>
          <Link
            name="home"
            onClick={() => {
              setActiveButton("home");
            }}
            $active={activeButton === "home" ? true : false}
            to="/"
          >
            {" "}
            <OvalSvg />
            <NavIconWrapper>
              <PiDog />
            </NavIconWrapper>
          </Link>

          <Link
            name="search"
            onClick={() => {
              setActiveButton("search");
            }}
            $active={activeButton === "search" ? true : false}
            to="/search"
          >
            {" "}
            <OvalSvg />
            <NavIconWrapper>
              <BiSolidSearch />
            </NavIconWrapper>
          </Link>
        </Nav>
      </PageHeader>
      <MainContentContainer>
        <Outlet />
      </MainContentContainer>
    </PageWrapper>
  );
};

export default PageLayout;
