import { LOGIN_OK, LOGIN_BAD, LOGOUT,REGISTER_OK, REGISTER_BAD } from "../constants/action-types";

 let initialState=localStorage.getItem("authState");

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
    case REGISTER_OK:
        localStorage.setItem('authState',action.payload);
        return action.payload;
    case LOGIN_BAD:
    case REGISTER_BAD:
        return action.payload;
    case LOGOUT:
        localStorage.removeItem('authState');
        return null;
    default:
      return state;
  }
};
export default authorizationReducer;