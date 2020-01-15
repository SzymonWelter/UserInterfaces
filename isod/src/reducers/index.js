import { combineReducers } from 'redux';
import isodReducer from './isod.reducer';

export default combineReducers({
  isod: isodReducer
});