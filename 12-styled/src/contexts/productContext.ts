import { createContext, Dispatch } from "react";
import { IProduct } from "../models/IProduct";
import { IAction } from "../reducers/productReducer";

export interface IProductContext {
  products: IProduct[];
  dispatch: Dispatch<IAction>;
}

export const ProductContext = createContext<IProductContext>({
  products: [],
  dispatch: () => {
    return;
  },
});
