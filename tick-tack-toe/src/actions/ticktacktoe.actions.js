import { actionTypes } from "./actiontypes";

export const newMove = (id, time) => dispatch => {
  dispatch({
    type: actionTypes.NEW_MOVE,
    newMove: id
  });
  if (time === -1) {
    setInterval(() => {
      dispatch({
        type: actionTypes.UPDATE_TIME
      });
    }, 1000);
  }
};

export const newGame = () => dispatch => {
  dispatch({
    type: actionTypes.NEW_GAME
  });
};
