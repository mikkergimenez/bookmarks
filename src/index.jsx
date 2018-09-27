import createHistory        from 'history/createBrowserHistory'
import React                from 'react'
import ReactDOM             from 'react-dom'
import store                from './store';

import { Provider }         from 'react-redux'

import { Route }            from 'react-router'
import { ConnectedRouter }  from 'react-router-redux'
import { setCSRF }          from './actions/index';

var css = require('./main.styl');

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
