import {applyMiddleware, createStore, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {settingsReducer} from './settingsStore';

const middleware = [];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default function setupStore() {
  return createStore(
    combineReducers({
      settings: settingsReducer,
    }),
    applyMiddleware(...middleware)
  );
}
