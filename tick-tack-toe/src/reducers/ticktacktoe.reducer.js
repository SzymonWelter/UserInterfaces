import { actionTypes } from "actions/actiontypes";
import { checkWinner } from "helpers/checkWinner";

const initialState = {
  board: Array(9).fill(""),
  currentUser: "x",
  winner: "",
  endGame: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NEW_MOVE:
      if (state.board[action.newMove]) {
        return { ...state };
      }

      const newBoard = state.board.map((val, index) =>
        index.toString() === action.newMove ? state.currentUser : val
      );
      const newUser = state.currentUser === "x" ? "o" : "x";

      const winner = checkWinner(newBoard);

      return {
        ...state,
        board: newBoard,
        currentUser: newUser,
        winner: winner
      };
    case actionTypes.NEW_GAME:
      return {
        ...initialState
      };
    default:
      return {
        ...state
      };
  }
}
