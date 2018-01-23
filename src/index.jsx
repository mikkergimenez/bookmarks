import React        from 'react'
import ReactDOM     from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import * as asyncInitialState from 'redux-async-initial-state';

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import reducer from './reducers' // Or wherever you keep your reducers

import thunkMiddleware from 'redux-thunk'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

import App from './components/App';

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

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(asyncInitialState.middleware(loadStore), thunkMiddleware, middleware)
  ),
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('.attach')
)


// <Route path="/about" component={About}/>
// <Route path="/topics" component={Topics}/>

// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// import { BrowserRouter } from 'react-router-dom'
//
// var css = require('./main.styl');
//
// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
//   , document.querySelector('.attach')
// );
