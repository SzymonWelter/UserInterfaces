import React, { createContext, useContext, useReducer } from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = { };

const middleware = [thunk];

export const reduxStore = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const StateContext = createContext();

export const StoreProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState)}
    children={children}
  />
);

export const useStore = () => useContext(StateContext);