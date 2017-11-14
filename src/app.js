import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import reducer from 'reducers';
import { lookupUserWatcher } from 'sagas/lookupUser';

import App from 'containers/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(lookupUserWatcher);

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
