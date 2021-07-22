import { combineReducers } from 'redux';
import booksDataReducer from './booksDataReducer';
import formDataReducer from './formDataReducer';

export default combineReducers({
  booksDataReducer,
  formDataReducer,
});
