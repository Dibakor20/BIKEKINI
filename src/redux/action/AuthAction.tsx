import { ActionType } from "redux/ActionType";
import { IAuthData } from "services/Type";

interface loginAction {
  type: ActionType.LOGIN;
  payload: IAuthData;
}

interface logoutAction {
  type: ActionType.LOGOUT;
  payload: number;
}

export type AuthAction = loginAction | logoutAction;
