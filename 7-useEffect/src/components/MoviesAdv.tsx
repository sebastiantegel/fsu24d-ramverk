import { useState, useEffect } from "react";
import { IMovie } from "../models/IMovie";
import { getMovies } from "../services/movieService";

export const MoviesAdv = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getData = async () => {
      const movies = await getMovies();

      setMovies(movies);
    };

    if (movies.length > 0) return;
    getData();
  });

  return (
    <>
      <div>
        {movies.map((m) => {
          return (
            <div key={m.imdbID}>
              <h3>{m.Title}</h3>
              <img src={m.Poster} alt={m.Title} />
            </div>
          );
        })}
      </div>
    </>
  );
};
