import { Movie } from "./Movie";

export type MovieExt = Movie & {
  Plot: string;
  Director: string;
  Actors: string;
};

// interface Test {
//   name: string;
// }

// interface TestExt extends Test {
//   email: string;
// }

// const a: MovieExt = { Title: "", Poster: "", imdbID: "", Plot: "", Director: "", Actors: ""}
// const b: Movie = { Title: "", Poster: "", imdbID: "" }
