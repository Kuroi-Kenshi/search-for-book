const initialState = {
  status: false,
  type: null,
};

const errorApiStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR_API_STATUS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default errorApiStatusReducer;
