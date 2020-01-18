import actionTypes from "./actionTypes"

const signingIn = e => dispatch => {
    e.preventDefault();
    dispatch({
        type: actionTypes.SIGNING_IN
    })
}

const signedIn = _ => dispatch => {
    dispatch({
        type: actionTypes.SIGNED_IN
    })
}

export default {
    signingIn,
    signedIn
}
