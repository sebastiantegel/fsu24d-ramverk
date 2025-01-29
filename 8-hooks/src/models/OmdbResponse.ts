export type OmdbResponse = {
  Search: Movie[];
};

export type Movie = {
  Title: string;
  Poster: string;
  imdbID: string;
};
