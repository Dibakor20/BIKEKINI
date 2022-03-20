import { IProduct } from "services/Type";
import { ActionType } from "redux/ActionType";
import { cartAction } from "redux/action/CartActions";

export const addToCart = (payload: IProduct):cartAction => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload:number):cartAction => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = ():cartAction => {
  return {
      type: ActionType.CLEAR_CART,
  };
};
