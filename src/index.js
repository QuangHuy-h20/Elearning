import React from "react";
import ReactDOM from "react-dom";
import "./styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Setup Redux
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const middleware = applyMiddleware(thunk);
const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducer, enhancer);

//Main
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
