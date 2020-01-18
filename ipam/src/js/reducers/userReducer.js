import { userActionTypes } from "src/js/actions";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.SIGNING_IN:
      return {
        ...state,
        loading: true,
      };

    case userActionTypes.SIGNED_IN:
      return {
        ...state,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
}
