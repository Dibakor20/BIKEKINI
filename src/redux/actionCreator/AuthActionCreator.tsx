import { Dispatch } from "react";
import { AuthAction } from "redux/action/AuthAction";
import { ActionType } from "redux/ActionType";
import AuthServices from "services/AuthServices";

export const login = (payload: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthAction>) => {
    AuthServices.login(payload).then((data) => {
      dispatch({
        type: ActionType.LOGIN,
        payload: data,
      });
    });
  };
};
