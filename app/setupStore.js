import {compose} from './ramda';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import persistState from 'redux-localstorage';
import {settingsReducer} from './settingsStore';

const initialState = {};
const middleware = [];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default function setupStore() {
  return createStore(
    combineReducers({
      settings: settingsReducer,
    }),
    initialState,
    compose(applyMiddleware(...middleware), persistState())
  );
}
