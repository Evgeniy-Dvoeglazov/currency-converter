import { ADD_VALUE, REMOVE_LAST_VALUE } from "../utils/constants"

const initialState = {
  amount: '1',
}

export const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return {
        amount: action.payload
      }

    case REMOVE_LAST_VALUE:
      return {
        amount: state.amount.slice(0, -1)
      }

    default:
      return state;
  }
};
