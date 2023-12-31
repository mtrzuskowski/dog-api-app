import { Outlet } from "react-router-dom";
import {
  PageWrapper,
  PageHeader,
  Nav,
  Link,
  LinkText,
  MainContentContainer,
} from "./PageLayoutStyles.js";
import OvalSvg from "../components/OvalFilter/OvalSvg.js";
import { useState } from "react";

export interface LinkProps {
  name: string;
  onClick: Function;
  isactive: string;
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
            isactive={activeButton === "home" ? "true" : "false"}
            to="/"
          >
            {" "}
            <LinkText>Home</LinkText>
            <OvalSvg />
          </Link>

          <Link
            name="search"
            onClick={() => {
              setActiveButton("search");
            }}
            isactive={activeButton === "search" ? "true" : "false"}
            to="/search"
          >
            {" "}
            <LinkText>Search</LinkText>
            <OvalSvg />
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
