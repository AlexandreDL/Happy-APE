// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

// == Import : local
import reducer from 'src/store/reducer';
import logMiddleware from './logMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL: 'http://api.happyape.local/',
  responseType: 'json',
});

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    axiosMiddleware(client),
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
