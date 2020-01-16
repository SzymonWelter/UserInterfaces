import { actionTypes } from "./actionTypes";

const fetchItems = () => dispatch => {
  dispatch({
    type: actionTypes.START_LOADING
  });

  fetch("https://isod.ee.pw.edu.pl/isod-portal/wapi?q=dissertations_graduated")
    .then(res => res.json())
    .then(items =>
      dispatch({
        type: actionTypes.FETCH_ITEMS,
        payload: items.list
      })
    )
    .then(_ =>
      dispatch({
        type: actionTypes.END_LOADING
      })
    );
};

const filterItems = (value) => dispatch => {
    dispatch({
        type: actionTypes.FILTER_ITEMS,
        filter: value
    })
}

export {
  fetchItems,
  filterItems
}