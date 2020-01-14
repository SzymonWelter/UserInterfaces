import { combineReducers } from 'redux';
import ticktacktoeReducer from './ticktacktoe.reducer';

export default combineReducers({
  ticktacktoe: ticktacktoeReducer
});