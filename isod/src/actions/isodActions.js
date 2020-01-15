import { actionTypes } from "./actionTypes";

export const fetchItems = () => dispatch => {
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

export const filterItems = (value) => dispatch => {
    dispatch({
        type: actionTypes.FILTER_ITEMS,
        filter: value
    })
}
