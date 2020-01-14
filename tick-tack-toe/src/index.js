import React from "react";
import { render } from "react-dom";
import App from "./Components/App.jsx";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
