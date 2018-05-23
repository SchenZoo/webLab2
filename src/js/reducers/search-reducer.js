import { MOVIES_SEARCH_FETCH_OK,MOVIES_SEARCH_FETCH_BAD, MOVIES_FETCH,WANTED_MOVIES, SORT, REVERSE } from "../constants/action-types";

const searchReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES_SEARCH_FETCH_OK:
        return [...action.payload.map(el=>{return{id: el.id, Poster: el.Poster, Title: el.Title}})];
    case MOVIES_SEARCH_FETCH_BAD:
    case MOVIES_FETCH:
    case WANTED_MOVIES:
    case SORT:
    case REVERSE:
        return null;
    default:
      return state;
  }
};
export default searchReducer;