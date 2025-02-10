import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import { Wrapper } from "../components/styled/Wrappers";
import { MoviePresention } from "../components/MoviePresentation";

export const Movies = () => {
  const { products } = useContext(ProductContext);

  return (
    <Wrapper>
      {products.map((p) => (
        <MoviePresention key={p.id} product={p} />
      ))}
    </Wrapper>
  );
};
