import {
  applyMiddleware,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  const middlewares = [loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, composedEnhancers);

  // if (process.env.NODE_ENV !== "production" && module.hot) {
  //   module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  // }

  return store;
}
