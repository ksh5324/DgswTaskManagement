import { userType } from "../util/types/userStateType";
import { actionType } from "../util/types/actionType";
import userAction from "../util/enums/userAction";

const userState: userType = {
  admin: false,
};

const userReducer = (state = userState, action: actionType) => {
  switch (action.type) {
    case userAction.ADMIN_LOGIN:
      return {
        ...state,
        admin: true,
      };
    case userAction.ADMIN_LOGOUT:
      return {
        ...state,
        admin: false,
      };
    default:
      return state;
  }
};

export default userReducer;
