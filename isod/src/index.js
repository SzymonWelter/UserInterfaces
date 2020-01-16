import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ReduxApp from "./ReduxApp.jsx";
import { Provider } from "react-redux";
import ContextApp from "ContextApp";
import { reduxStore, StoreProvider } from "stores";
import reducer from "reducers/isod.reducer";

const initialState = {
  filter: '',
  loading: false
};

ReactDOM.render(
  <div className="row">
    <div className="col">
      <Provider store={reduxStore}>
        <ReduxApp />
      </Provider>
    </div>
    <div className="col">
      <StoreProvider reducer={reducer} initialState={initialState}>
        <ContextApp />
      </StoreProvider>
    </div>
  </div>,
  document.getElementById("root")
);
