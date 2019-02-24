import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import initialState from 'initialState';


const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const configureStore = () => {
  const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    )),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
