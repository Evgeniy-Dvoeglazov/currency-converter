import { ADD_EXCHANGE_RATE } from "../utils/constants";

const initialState = {
  exchangeRate: '',
}

export const exchangeRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXCHANGE_RATE:
      return {
        exchangeRate: action.payload
      }

    default:
      return state;
  }
};
