import { Link } from "react-router";
import { IProduct } from "../models/IProduct";
import { MagicButton } from "./styled/Buttons";
import { P } from "./styled/P";
import { Title } from "./styled/Title";
import { MovieWrapper } from "./styled/Wrappers";
import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import { IActionType } from "../reducers/productReducer";

type MoviePresentationProps = {
  product: IProduct;
};

export const MoviePresention = (props: MoviePresentationProps) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <MovieWrapper selected={props.product.selected}>
      <Title>{props.product.name}</Title>
      <P>{props.product.price}</P>
      <MagicButton
        bgColor="whitesmoke"
        textColor="black"
        onClick={() =>
          dispatch({
            type: IActionType.SELECTED,
            payload: props.product.id.toString(),
          })
        }
      >
        Välj
      </MagicButton>
      <Link to={"/movie/" + props.product.id}>Läs mer...</Link>
    </MovieWrapper>
  );
};
