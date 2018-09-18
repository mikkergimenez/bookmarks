import reducer from '../reducers' // Or wherever you keep your reducers

import { createStore, applyMiddleware, compose } from 'redux'
import * as asyncInitialState from 'redux-async-initial-state';

import { routerMiddleware } from 'react-router-redux'

import thunkMiddleware from 'redux-thunk'
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const loadStore = (currentState) => {
  return new Promise(resolve => {
    fetch('/notes')
      .then(response => response.json())
      .then(
        notes => {
          resolve({
            ...currentState,
            notes: notes
          })
        }
      );
  });
}

const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(asyncInitialState.middleware(loadStore), thunkMiddleware, middleware)
  ),
)

export default store;
