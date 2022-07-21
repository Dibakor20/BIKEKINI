import { Action } from "history";
import { cartAction } from "redux/action/CartActions";
import { ActionType } from "redux/ActionType";
import { IProduct } from "services/Type";

const cartReducers = (state: IProduct[] = [], action: cartAction) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      return [...state, action.payload];
    }
    case ActionType.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item.id !== action.payload);
      return newState;
    }
    case ActionType.CLEAR_CART: {
      return [];
    }

    case ActionType.INCREMENT: {
      const newState = state.map((item) => item.id === action.payload)
      return newState.length + 1
    }
      
    default:
      return state;
  }
};

export default cartReducers;
