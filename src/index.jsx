import React        from 'react'
import ReactDOM     from 'react-dom'

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter } from 'react-router-redux'





import { setCSRF } from './actions/index';

import store from './store';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()


import App from './components/App';



var root = document.getElementById('reactjs-root');

setCSRF(root.dataset.csrf)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/notes/domain/:domain" component={App} />
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
