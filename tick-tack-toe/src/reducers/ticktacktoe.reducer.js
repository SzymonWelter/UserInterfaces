import { actionTypes } from "actions/actiontypes";
import { checkWinner } from "helpers/checkWinner";

const initialState = {
  board: Array(9).fill(""),
  currentUser: "x",
  winner: "",
  endGame: false,
  time: -1
};

export default function(state = initialState, action) {
  let winner = "";
  switch (action.type) {
    case actionTypes.NEW_MOVE:
      if (state.board[action.newMove]) {
        return { ...state };
      }

      const newBoard = state.board.map((val, index) =>
        index.toString() === action.newMove ? state.currentUser : val
      );
      const newUser = state.currentUser === "x" ? "o" : "x";

      winner = checkWinner(newBoard);
      const time = winner ? -1 : 15;

      return {
        ...state,
        time: time,
        board: newBoard,
        currentUser: newUser,
        winner: winner
      };
    case actionTypes.NEW_GAME:
      return {
        ...initialState,
        time: 15
      };
    case actionTypes.UPDATE_TIME:
      if (state.winner) {
        return { ...state };
      }

      if (!state.time) {
        winner = state.currentUser === "x" ? "o" : "x";
      }

      return {
        ...state,
        time: state.time - 1,
        winner: winner
      };
    default:
      return {
        ...state
      };
  }
}
