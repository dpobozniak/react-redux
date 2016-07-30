import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// import { hashHistory } from 'react-router';
// import { routerMiddleware } from 'react-router-redux';
import reducer from './reducers';

const configureStore = () => {
  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
  });

  // const history = hashHistory; // browserHistory
  // const reduxRouterMiddleware = routerMiddleware(history);

  const store = applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )(createStore)(reducer);

  return store;
};

export default configureStore;
