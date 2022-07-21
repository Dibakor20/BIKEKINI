import { ActionType } from "redux/ActionType";
import { IProduct } from "services/Type";

interface addToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: IProduct;
}

interface removeFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: number;
}

interface clearCartAction {
  type: ActionType.CLEAR_CART;
}

interface incrementCartAction {
  type: ActionType.INCREMENT;
  payload: number;
}

interface decrementCartAction {
  type: ActionType.Decrement;
  payload: number;
}

export type cartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction
  | incrementCartAction
  | decrementCartAction;
