import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/product";
import cartReducer from "./store/reducers/cart";
import authReducer from "./store/reducers/auth";
import productSaga from "./store/sagas/productSaga";
import cartSaga from "./store/sagas/cartSaga";
import "./index.css";
import App from "./App";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(productSaga);
sagaMiddleware.run(cartSaga);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
