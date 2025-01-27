// http://localhost:5173/movie/abc123
//                              :id

import { useParams } from "react-router";

export const Movie = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Movie: {id}</h2>
    </>
  );
};
