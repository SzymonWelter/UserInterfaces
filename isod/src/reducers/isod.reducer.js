import { actionTypes } from "actions/actionTypes";
import {filterResolver} from "helpers/filterResolver";
const initialState = {
  items: undefined,
  loading: false,
  filter:''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
        data: action.payload
      };
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.END_LOADING:
      return {
        ...state,
        loading: false
      };
    case actionTypes.FILTER_ITEMS:
      return{
          ...state,
          items: state.data.filter(elem => filterResolver(elem, action.filter)),
          filter: action.filter
      }
    default:
      return state;
  }
}
