import { LOGIN_OK, LOGIN_BAD, LOGOUT,REGISTER_OK, REGISTER_BAD } from "../constants/action-types";

let initialState=null;
//const initialState={username: "SchenZo"};
const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
    case REGISTER_OK:
        return action.payload;
    case LOGIN_BAD:
    case REGISTER_BAD:
        return action.payload;
    case LOGOUT:
        return null;
    default:
      return state;
  }
};
export default authorizationReducer;