import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as asyncInitialState from 'redux-async-initial-state';

import ConfigReducer from './config';
import NotesReducer from './notes';

const reducers = {
  config: ConfigReducer,
  notes:  NotesReducer,
  router: routerReducer,
}

const reducer = asyncInitialState.outerReducer(combineReducers({
  ...reducers,
  // We need innerReducer to store loading state, i.e. for showing loading spinner
  // If you don't need to handle loading state you may skip it
  asyncInitialState: asyncInitialState.innerReducer,
}));

export default reducer
