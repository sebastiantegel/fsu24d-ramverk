import { MovieExt } from "../../models/MovieExt";

interface IShowMovieDetailsProps {
  movie: MovieExt;
}

export const ShowMovieDetails = (props: IShowMovieDetailsProps) => {
  return (
    <div className="movie">
      <h3>{props.movie.Title}</h3>
      <div className="image-container">
        <img src={props.movie.Poster} alt={props.movie.Title} />
      </div>
      <p>{props.movie.Plot}</p>
      <p>{props.movie.Actors}</p>
    </div>
  );
};
