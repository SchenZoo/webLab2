import { IMAGES_FETCH_OK,IMAGES_FETCH_BAD } from "../constants/action-types";

const imagesReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES_FETCH_OK:
        return [...action.payload.map(el=>{return{id: el.id, Poster: el.Poster}})];
    case IMAGES_FETCH_BAD:
        return null;
    default:
      return state;
  }
};
export default imagesReducer;