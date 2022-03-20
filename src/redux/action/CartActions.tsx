import { ActionType } from "redux/ActionType";
import { IProduct } from "services/Type";


interface addToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: IProduct
}

interface removeFromCartAction {
    type: ActionType.REMOVE_FROM_CART;
    payload: number
}

interface clearCartAction {
    type: ActionType.CLEAR_CART;
}

export type cartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction
