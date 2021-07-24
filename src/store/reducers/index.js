import { combineReducers } from 'redux';
import booksDataReducer from './booksDataReducer';
import formDataReducer from './formDataReducer';
import errorApiStatusReducer from './errorApiStatusReducer';

export default combineReducers({
  booksDataReducer,
  formDataReducer,
  errorApiStatusReducer,
});
