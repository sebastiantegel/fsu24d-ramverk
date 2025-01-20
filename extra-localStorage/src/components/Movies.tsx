import { useState } from "react";
import { IMovie, IOmdbResponse } from "../models/IMovie";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );

  const handleClick = async () => {
    const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
    const omdbData: IOmdbResponse = await response.json();

    setMovies(omdbData.Search);
    localStorage.setItem("movies", JSON.stringify(omdbData.Search));
  };

  return (
    <>
      <button onClick={handleClick}>Hämta filmer</button>
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
