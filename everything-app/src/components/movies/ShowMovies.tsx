import { Movie } from "../../models/Movie";
import { ShowMovie } from "./ShowMovie";
import "./../../styles/movies.css";

interface IShowMoviesProps {
  movies: Movie[];
}

export const ShowMovies = (props: IShowMoviesProps) => {
  return (
    <div className="movies">
      {props.movies.map((m) => {
        return <ShowMovie movie={m} key={m.imdbID}></ShowMovie>;
      })}
    </div>
  );
};
