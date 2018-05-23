import { IMAGES_FETCH_OK } from "../constants/action-types";

const imagesReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES_FETCH_OK:
        return [...action.payload.map(el=>{return{imdbID: el.imdbID, Poster: el.Poster}})];
    default:
      return state;
  }
};
export default imagesReducer;