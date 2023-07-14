import "./App.css";
import PageWrapper from "./layouts/PageWrapper";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
