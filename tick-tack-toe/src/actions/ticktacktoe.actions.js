import {actionTypes} from './actiontypes';

export const newMove = (id) => dispatch => {
    dispatch({
        type: actionTypes.NEW_MOVE,
        newMove: id
    });
}

export const newGame = () => dispatch => {
    dispatch({
        type: actionTypes.NEW_GAME
    })
}