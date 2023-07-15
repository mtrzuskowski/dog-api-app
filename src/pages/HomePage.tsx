import { useLoaderData, useRouteLoaderData } from "react-router-dom";
const HomePage = () => {
  console.log(useRouteLoaderData("0"));
  return <div>Home</div>;
};

export default HomePage;
