import { IProduct } from "../models/IProduct";

export interface IAction {
  type: IActionType;
  payload: string;
}

export enum IActionType {
  LOADED,
  SELECTED,
}

export const ProductReducer = (
  products: IProduct[],
  action: IAction
): IProduct[] => {
  if (action.type === IActionType.LOADED) {
    return JSON.parse(action.payload);
  }

  if (action.type === IActionType.SELECTED) {
    return products.map((p) => {
      if (p.id === +action.payload) {
        return { ...p, selected: !p.selected };
      }
      return p;
    });
  }

  return products;
};
