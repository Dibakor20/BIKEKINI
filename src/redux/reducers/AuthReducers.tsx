import { AuthAction } from "redux/action/AuthAction";
import { ActionType } from "redux/ActionType";
import { IAuthData } from "services/Type";

const authReducers = (state: IAuthData | null = null, action:AuthAction) => {
    switch (action.type) {
        case ActionType.LOGIN: 
            return action.payload
        case ActionType.LOGOUT:
            return null
        default: 
            return state
    }
}

export default authReducers;