import { MOVIES_FETCH_OK, VIDEO_FETCH_OK, MOVIES_FETCH } from "../constants/action-types";

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES_FETCH_OK:
        return action.payload;
    case VIDEO_FETCH_OK:
        return {...state,YT: action.payload};
    case MOVIES_FETCH:
        return null;
    default:
      return state;
  }
};
export default selectedMovieReducer;