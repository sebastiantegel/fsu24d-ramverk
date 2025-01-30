import { MovieExt } from "../models/MovieExt";
import { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async (searchText: string) => {
  const data = await get<OmdbResponse>(`${BASE_URL}s=${searchText}`);
  return data.Search;
};

export const getMovieById = async (id: string) => {
  const data = await get<MovieExt>(`${BASE_URL}i=${id}`);
  return data;
};
