import { ADD_FORM_DATA } from '@store/constants/actionTypes';

const initialState = {
  searchText: 'JavaScript',
  category: 'all',
  sortingBy: 'newest',
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formDataReducer;
