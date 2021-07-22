import {
  ADD_BOOKS_DATA,
  CLEAR_BOOKS_DATA,
  ADD_FORM_DATA,
} from '@store/constants/actionTypes';

export const addBooksData = (data) => ({
  type: ADD_BOOKS_DATA,
  payload: data,
});

export const addFormData = (data) => ({
  type: ADD_FORM_DATA,
  payload: data,
});

export const clearBooksData = () => ({
  type: CLEAR_BOOKS_DATA,
});
