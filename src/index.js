import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api.js";
import { ActionCreator } from './reducer/login/login';
import { LOCAL_STORAGE_USER_ROLE } from './const';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

const role = localStorage.getItem(LOCAL_STORAGE_USER_ROLE);

store.dispatch(ActionCreator.loadRole(role));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
