import { useState } from "react";
import { Movie } from "../models/Movie";
import { SearchMovie } from "../components/movies/SearchMovie";
import { ShowMovies } from "../components/movies/ShowMovies";
import { getMovies } from "../services/movieService";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const search = async (searchText: string) => {
    const data = await getMovies(searchText);
    setMovies(data);
  };

  return (
    <>
      <h2>Movies</h2>
      <SearchMovie search={search}></SearchMovie>
      <ShowMovies movies={movies}></ShowMovies>
    </>
  );
};
