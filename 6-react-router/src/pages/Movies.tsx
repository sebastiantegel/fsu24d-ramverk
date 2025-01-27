import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { OmdbResponse } from "../models/OmdbResponse";
import { useNavigate } from "react-router";
import "./../styles/movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star"
      );
      const data: OmdbResponse = await response.json();

      setMovies(data.Search);
      setIsLoading(false);
    };

    if (movies.length > 0) return;

    getData();
  });

  const handleClick = (id: string) => {
    // /movie/tt0076759
    navigate("/movie/" + id);
  };

  return (
    <div id="movies">
      <h2>Movies</h2>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div>
          {movies.map((m) => {
            return (
              <div key={m.imdbID}>
                <h4>{m.Title}</h4>
                <button
                  onClick={() => {
                    handleClick(m.imdbID);
                  }}
                >
                  Läs mer
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
