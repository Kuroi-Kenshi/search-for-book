import { ADD_BOOKS_DATA, CLEAR_BOOKS_DATA } from '@store/constants/actionTypes';

const initialState = [];

const booksDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS_DATA:
      return [...state, ...action.payload];
    case CLEAR_BOOKS_DATA:
      return initialState;
    default:
      return state;
  }
};

export default booksDataReducer;
