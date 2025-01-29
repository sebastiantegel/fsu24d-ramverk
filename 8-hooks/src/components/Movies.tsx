import { useFetch } from "../hooks/useFetch";
import { OmdbResponse } from "../models/OmdbResponse";

export const Movies = () => {
  const { data, loading } = useFetch<OmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=star"
  );

  return (
    <>
      Movies:
      <>{loading ? <h2>Laddar data...</h2> : <>{data?.Search.length}</>}</>
    </>
  );
};
