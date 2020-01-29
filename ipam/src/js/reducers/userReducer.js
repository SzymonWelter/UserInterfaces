import { userActionTypes } from "src/js/actions";

const initialState = {
  loading: false,
  id: 'admin'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.SIGNING_IN:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case userActionTypes.SIGNED_IN:
      return {
        ...state,
        loading: false,
        id: action.id
      };
    case userActionTypes.SIGN_OUT:
      return {
        ...state,
        id: ''
      }
    case userActionTypes.ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return {
        ...state
      };
  }
}
