import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById } from "../services/movieService";
import { MovieExt } from "../models/MovieExt";
import { ShowMovieDetails } from "../components/movies/ShowMovieDetails";

export const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieExt>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = await getMovieById(id);
        setMovie(data);
      }
    };

    if (!movie) getData();
  });

  return <>{movie && <ShowMovieDetails movie={movie}></ShowMovieDetails>}</>;
};
