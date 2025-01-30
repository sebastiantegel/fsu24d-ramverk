import { Link } from "react-router";
import { Movie } from "../../models/Movie";

interface IShowMovieProps {
  movie: Movie;
}

export const ShowMovie = (props: IShowMovieProps) => {
  return (
    <div className="movie">
      <h3>{props.movie.Title}</h3>
      <div className="image-container">
        <img src={props.movie.Poster} alt={props.movie.Title} />
      </div>
      <Link to={"/movie/" + props.movie.imdbID}>Läs mer</Link>
    </div>
  );
};
