import { MOVIES_FETCH_OK,MOVIES_FETCH_BAD } from "../constants/action-types";

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES_FETCH_OK:
        return action.payload;
    case MOVIES_FETCH_BAD:
        return null;
    default:
      return state;
  }
};
export default selectedMovieReducer;