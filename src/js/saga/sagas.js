
import { takeEvery, call, put} from "redux-saga/effects";
import {
LOGIN,REGISTER,MOVIES_FETCH, MOVIES_SEARCH, WANTED_MOVIES, IMAGES_FETCH, VIDEO_FETCH
 } from '../constants/action-types';
import{
    loginFailed,
    loginSuccessfully,
    registerFailed,
    registerSuccessfully,
    moviesFetchSuccessfully,
    moviesSearchSuccessfully,
    moviesSearchFailed,
    wantedMoviesSuccessfully,
    imagesFetchSuccessfully,
    videoFetch,
    videoFetchSuccessfully
} from '../actions/index';
 import { 
    fetchUserByUsername,
    tryToRegister,
    fetchMovies,
    fetchMovieById,
    fetchYT
} from '../../api/index';

// LOGIN
export function* watcherLoginAttemptSaga() {
    yield takeEvery(LOGIN, loginAttemptSaga);
}
function* loginAttemptSaga(action)
{
    const user = yield call (fetchUserByUsername,action.payload.username);
    if(user && user.password === action.payload.password) {
    yield put(loginSuccessfully({
        username: user.username
    }));
    } else {
    yield put(loginFailed());
    }
}

// REGISTRATION
export function* watcherRegistrationAttemptSaga() {
    yield takeEvery(REGISTER, registrationAttemptSaga);
}


function* registrationAttemptSaga(action)
{
    const response = yield call (tryToRegister,action.payload);
    if (response) {
        yield put(registerSuccessfully(response));
    } else {
        yield put(registerFailed());
    }
}
//MOVIE FETCH
export function* watcherMoviesUploadSaga() {
    yield takeEvery(MOVIES_FETCH, moviesFetchSaga);
}


function* moviesFetchSaga(action)
{
    const response = yield call (fetchMovieById,action.payload);
    if(response){ 
        yield put(moviesFetchSuccessfully(response));
        yield put(videoFetch(response.Title));
    }
}

//FETCH YT VIDEO
export function* watcherVideoUploadSaga() {
    yield takeEvery(VIDEO_FETCH, videoFetchSaga);
}

function* videoFetchSaga(action)
{
    const response = yield call (fetchYT,action.payload);
    if(response) {
    yield put(videoFetchSuccessfully(response));
    }
}

//IMAGES FETCH(FROM MOVIE DB)
export function* watcherImagesUploadSaga() {
    yield takeEvery(IMAGES_FETCH, imagesFetchSaga);
}

function* imagesFetchSaga(action)
{
    const response = yield call (fetchMovies);
    if(response) 
    yield put(imagesFetchSuccessfully(response));
}

//MOVIES FETCH FOR SEARCH
export function* watcherSearchMoviesUploadSaga() {
    yield takeEvery(MOVIES_SEARCH, moviesSearchFetchSaga);
}

function* moviesSearchFetchSaga(action)
{
    if(!action.payload){
        yield put(moviesSearchFailed());
        return;
    }
    const response = yield call (fetchMovies,action.payload);
    
    response && response.length>0 ? yield put(moviesSearchSuccessfully(response)) : yield put(moviesSearchFailed());
}

// MOVIES FATCH FOR MOVIELIST
export function* watcherWantedMoviesUploadSaga() {
    yield takeEvery(WANTED_MOVIES, moviesWantedFetchSaga);
}

function* moviesWantedFetchSaga(action)
{

    const response = yield call (fetchMovies,action.payload);
    if(response && response.length>0)
    yield put(wantedMoviesSuccessfully(response));
}
