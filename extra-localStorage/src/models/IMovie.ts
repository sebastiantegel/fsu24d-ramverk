export interface IMovie {
  Title: string;
  Poster: string;
  imdbID: string;
}

export interface IOmdbResponse {
  Search: IMovie[];
}
