import { Movie } from "./Movie";

export type MovieExt = Movie & {
  Plot: string;
  Director: string;
  Actors: string;
};
