import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from './reducers';

import thunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  {
    token: '', // token
  },
  applyMiddleware(thunk)
)