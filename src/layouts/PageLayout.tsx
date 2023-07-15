import { Outlet } from "react-router-dom";
import {
  PageWrapper,
  PageHeader,
  Nav,
  Link,
  LinkText,
  Oval,
} from "./PageLayoutStyles.js";

const PageLayout = () => {
  return (
    <PageWrapper>
      <PageHeader>
        <Nav>
          <Link to="/">
            {" "}
            <LinkText>Home</LinkText>
            <Oval />
          </Link>

          <Link to="/search">
            {" "}
            <LinkText>Search</LinkText>
            <Oval />
          </Link>
        </Nav>
      </PageHeader>
      <main>
        <Outlet />
      </main>
    </PageWrapper>
  );
};

export default PageLayout;
