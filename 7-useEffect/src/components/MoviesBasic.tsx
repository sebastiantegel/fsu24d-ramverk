import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const MoviesBasic = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star"
      );
      const data: IOmdbResponse = await response.json();

      setMovies(data.Search);
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
