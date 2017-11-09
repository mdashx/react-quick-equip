import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { initialState, rootReducer } from 'reducer';

import App from 'containers/App';

const store = createStore(rootReducer);

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

