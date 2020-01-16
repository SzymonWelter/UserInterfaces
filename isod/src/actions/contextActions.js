import { actionTypes } from "./actionTypes";

const fetchItems = payload => ({
  type: actionTypes.FETCH_ITEMS,
  payload: payload
});

const filterItems = value => ({
  type: actionTypes.FILTER_ITEMS,
  filter: value
});

const startLoading = () => ({
    type: actionTypes.START_LOADING
});

const stopLoading = () => ({
    type: actionTypes.END_LOADING
});
export { fetchItems, filterItems, startLoading, stopLoading };
