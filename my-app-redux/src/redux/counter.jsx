const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INCREMENT_BY_VALUE = 'incrementByValue';

const initialState = {
  count: 0,
};

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: Number(value),
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY_VALUE:
      return { ...state, count: state.count + Number(action.payload) };
    default:
      return state;
  }
};

export default counterReducer;
