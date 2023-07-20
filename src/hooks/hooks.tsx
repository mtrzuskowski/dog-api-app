import { useRouteLoaderData } from "react-router";
import { DogInfoList } from "../App";

export const useBreedsData = () => {
  return (useRouteLoaderData("0") as DogInfoList).map((breedInfo) => {
    return breedInfo.breed;
  });
};

export const useFullDogsData = () => {
  return useRouteLoaderData("0") as DogInfoList;
};
