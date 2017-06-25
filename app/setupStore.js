import {createStore, combineReducers} from 'redux';
import {settingsReducer} from './settingsStore';

export default function setupStore() {
  return createStore(
    combineReducers({
      settings: settingsReducer,
    })
  );
}
