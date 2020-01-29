import actionTypes from "./actionTypes";
import { authService } from "src/js/services";

const signIn = form => dispatch => {
  dispatch({
    type: actionTypes.SIGNING_IN
  });
  setTimeout(() => {
    const result = authService.signIn(form);
    if (result) {
      dispatch({
        type: actionTypes.SIGNED_IN,
        id: result
      });
    } else {
      dispatch({
        type: actionTypes.ERROR,
        error: "Wrong username or password"
      });
    }
  },2000);
};

const signOut = () => dispatch => {
  dispatch({
    type: actionTypes.SIGN_OUT
  })
}

export default {
  signIn,
  signOut
};
