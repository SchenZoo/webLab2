import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./js/components/App";
import createSagaMiddleware from 'redux-saga';
import {
   watcherLoginAttemptSaga,
   watcherRegistrationAttemptSaga,
   watcherMoviesUploadSaga,
   watcherSearchMoviesUploadSaga,
   watcherWantedMoviesUploadSaga,
   watcherImagesUploadSaga
   } from './js/saga/sagas';

import { createStore,applyMiddleware } from "redux";
import rootReducer from "./js/reducers/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherLoginAttemptSaga);
sagaMiddleware.run(watcherRegistrationAttemptSaga);
sagaMiddleware.run(watcherMoviesUploadSaga);
sagaMiddleware.run(watcherSearchMoviesUploadSaga);
sagaMiddleware.run(watcherWantedMoviesUploadSaga);
sagaMiddleware.run(watcherImagesUploadSaga);

render(
  <Provider store={store}>
        <App/>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();