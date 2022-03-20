import { IProduct } from "services/Type";
import { ActionType } from "redux/ActionType";

export const addToCart = (payload: IProduct) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload:number) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
      type: ActionType.CLEAR_CART,
      payload:''
  };
};

export type cartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof clearCart>;
