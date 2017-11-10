import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import reducer from 'reducers';

import App from 'containers/App';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

render();

