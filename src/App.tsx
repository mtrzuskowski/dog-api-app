import "./App.css";
import PageLayout from "./layouts/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";

type DogBreed = string[];

type TDogBreedList2 = string[];

type TDogBreedList = DogBreed[];

type TDogBreedData = {
  message: TDogBreedList;
  signal: string;
};
type TDogImgData = {
  message: string;
  signal: string;
};

export interface DogInfo {
  breed: string;
  imgUrl: string;
}

export type DogInfoList = DogInfo[];

const stringifyBreeds = (breeds: TDogBreedList) => {
  const keys = Object.keys(breeds) as (keyof typeof breeds)[];
  const fullBreeds: TDogBreedList2 = [];
  for (let i = 0; i < keys.length; i++) {
    const breed = breeds[keys[i]] as string[];
    if (breed.length > 0) {
      const tmpBreeds = breed.map(
        (breed) => `${String(keys[i])}/${String(breed)}`
      );
      fullBreeds.push(...tmpBreeds);
    } else {
      fullBreeds.push(String(keys[i]));
    }
  }
  return fullBreeds;
};

const mapImageToBreed = async (
  dogBreeds: TDogBreedList
): Promise<DogInfoList> => {
  const breeds = stringifyBreeds(dogBreeds);
  const dogFullInfos = await Promise.all(
    breeds.map(async (breed) => {
      const breedImg = await axios
        .get<TDogImgData>(
          `https://dog.ceo/api/breed/${String(breed)}/images/random`
        )
        .then((res) => {
          return res.data.message;
        });
      return { breed: breed, imgUrl: breedImg };
    })
  );
  return dogFullInfos;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<PageLayout />}
      loader={async () => {
        const dogNameList = await axios
          .get<TDogBreedData>(`https://dog.ceo/api/breeds/list/all`)
          .then((res) => {
            return res.data.message;
          });

        const dogInfos = mapImageToBreed(dogNameList);
        return dogInfos;
      }}
    >
      <Route index element={<HomePage />}></Route>
      <Route path="search" element={<SearchPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
