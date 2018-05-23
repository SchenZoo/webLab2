

import {
     LOGIN_OK, LOGIN_BAD, LOGOUT, LOGIN,
     REGISTER,REGISTER_OK,REGISTER_BAD,
     MOVIES_FETCH,MOVIES_FETCH_OK,MOVIES_FETCH_BAD,
      SORT, REVERSE,
       MOVIES_SEARCH,MOVIES_SEARCH_FETCH_BAD,MOVIES_SEARCH_FETCH_OK,
       WANTED_MOVIES,WANTED_MOVIES_FETCH_BAD,WANTED_MOVIES_FETCH_OK,
       IMAGES_FETCH,IMAGES_FETCH_BAD,IMAGES_FETCH_OK
     } from "../constants/action-types";

export const loginSuccessfully = user => ({ type: LOGIN_OK, payload: user });
export const loginFailed = () => ({ type: LOGIN_BAD, payload: {msg: 'Wrong username or password'}});
export const logout= () => ({ type: LOGOUT});
export const login= (user) => ({type: LOGIN, payload: user});
export const register= (user) => ({type: REGISTER,payload: user});
export const registerSuccessfully= (user) => ({type: REGISTER_OK,payload: user});
export const registerFailed=() => ({type: REGISTER_BAD, payload: {msg: 'Username already taken'}});
export const moviesFetch=(id) => ({type: MOVIES_FETCH,payload:id});
export const moviesFetchSuccessfully=(movies) => ({type: MOVIES_FETCH_OK,payload: movies});
export const moviesFetchFailed=() => ({type: MOVIES_FETCH_BAD});
export const sortMovies=(sortFunction) => ({type:SORT, payload:sortFunction});
export const reverseMovies=() => ({type:REVERSE});
export const moviesSearch=(value) => ({type:MOVIES_SEARCH, payload: value});
export const moviesSearchSuccessfully=(movies) => ({type:MOVIES_SEARCH_FETCH_OK, payload: movies});
export const moviesSearchFailed=() => ({type:MOVIES_SEARCH_FETCH_BAD});
export const wantedMovies=(value) => ({type: WANTED_MOVIES, payload: value});
export const wantedMoviesSuccessfully=(movies) => ({type: WANTED_MOVIES_FETCH_OK, payload: movies});
export const wantedMoviesFailed=() => ({type: WANTED_MOVIES_FETCH_BAD});
export const imagesFetch=()=> ({type: IMAGES_FETCH});
export const imagesFetchSuccessfully=(movies) => ({type: IMAGES_FETCH_OK,payload: movies});
export const imagesFetchFailed=() => ({type: IMAGES_FETCH_BAD});
