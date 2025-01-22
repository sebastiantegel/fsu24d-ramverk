import { useState } from "react";
import "./App.css";
import { IOmdbResponse } from "./models/IOmdbResponse";
import { IMovie } from "./models/IMovie";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getMovies = async () => {
    const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
    const data: IOmdbResponse = await response.json();

    setMovies(data.Search);
  };

  return (
    <>
      <button onClick={getMovies}>Hämta filmer</button>
      <div>
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
