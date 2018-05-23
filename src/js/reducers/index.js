import { combineReducers } from "redux";
import authorizationReducer from './auth-reducer';
import imagesReducer from './images-reducer';
import wantedMoviesReducer from "./wanted-movies-reducer";
import searchReducer from "./search-reducer";
import selectedMovieReducer from "./movie-reducer";

const rootReducer = combineReducers({
  user : authorizationReducer,
  images: imagesReducer,
  wMovies: wantedMoviesReducer,
  search: searchReducer,
  selectedMovie: selectedMovieReducer
});

export default rootReducer;