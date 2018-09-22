import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const logger = createLogger({
  collapsed: true,
  diff: true
});

const START = "START";
const start = () => ({ type: START });
const initialState = { appStarted: false };

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case START:
      return { ...state, appStarted: true };
    default:
      return state;
  }
}, applyMiddleware(logger));

store.dispatch(start());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
