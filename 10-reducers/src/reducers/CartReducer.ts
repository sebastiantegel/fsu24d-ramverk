import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

interface ICartAction {
  type: ICartActionType;
  payload: string;
}

export enum ICartActionType {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

export const CartReducer = (
  cart: CartItem[],
  action: ICartAction
): CartItem[] => {
  switch (action.type) {
    case ICartActionType.ADDED: {
      const p: Product = JSON.parse(action.payload);

      const foundInCart = cart.find((ci) => ci.product.name === p.name);

      if (!foundInCart) return [...cart, new CartItem(p, 1)];

      return cart.map((ci) => {
        if (ci.product.name === p.name) {
          return { ...ci, amount: ci.amount + 1 };
        }
        return ci;
      });
    }

    case ICartActionType.REMOVED: {
      const cartItem: CartItem = JSON.parse(action.payload);
      return cart.filter((ci) => ci.product.name !== cartItem.product.name);
    }

    case ICartActionType.DECREASED: {
      const cartItem: CartItem = JSON.parse(action.payload);

      if (cartItem.amount >= 2) {
        return cart.map((ci) => {
          if (ci.product.name === cartItem.product.name) {
            return { ...ci, amount: ci.amount - 1 };
          }
          return ci;
        });
      }

      return cart.filter((ci) => ci.product.name !== cartItem.product.name);
    }

    case ICartActionType.INCREASED: {
      const p: Product = JSON.parse(action.payload);
      return cart.map((ci) => {
        if (ci.product.name === p.name) {
          return { ...ci, amount: ci.amount + 1 };
        }
        return ci;
      });
    }

    default:
      return cart;
  }
};
