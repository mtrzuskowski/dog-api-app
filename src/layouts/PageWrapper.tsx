import { NavLink, Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="pageWrapper">
      <header>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/search"> Search </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageWrapper;
