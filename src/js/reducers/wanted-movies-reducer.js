import { WANTED_MOVIES_FETCH_OK,WANTED_MOVIES_FETCH_BAD,SORT, REVERSE } from "../constants/action-types";

const wantedMoviesReducer = (state = null, action) => {
  switch (action.type) {
    case WANTED_MOVIES_FETCH_OK:
        return action.payload;
    case WANTED_MOVIES_FETCH_BAD:
        return null;
    case SORT:
        return [...state.sort(action.payload)];
    case REVERSE:
        return [...state.reverse()];
    default:
      return state;
  }
};
export default wantedMoviesReducer;