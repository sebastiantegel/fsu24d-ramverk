import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async () => {
  const data = await get<IOmdbResponse>(`${BASE_URL}s=star`);
  return data.Search;
};

export const getMovieById = async (id: string) => {
  const data = await get<IMovie>(`${BASE_URL}i=${id}`);
  return data;
};
