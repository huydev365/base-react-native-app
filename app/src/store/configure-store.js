import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(loggerMiddleware, sagaMiddleware)
);

const configureStore = (navReducer, preloadedState = {}) => {
  const appReducers = combineReducers({
    nav: navReducer
  });
  const store = createStore(appReducers, preloadedState, enhancer);

  sagaMiddleware.run(rootSaga);

  return { store };
};

export default configureStore;
