import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import { useParams } from "react-router";
import { MoviePresention } from "../components/MoviePresentation";
import { Wrapper } from "../components/styled/Wrappers";

export const Movie = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  if (id) {
    const product = products.find((p) => p.id === +id);

    if (product) {
      return (
        <Wrapper>
          <MoviePresention product={product}></MoviePresention>
        </Wrapper>
      );
    }
  }

  return <>Movie</>;
};
