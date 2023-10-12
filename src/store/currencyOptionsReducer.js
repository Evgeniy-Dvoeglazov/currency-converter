// редьюсер списка валют
import { ADD_OPTIONS } from "../utils/constants";

const initialState = {
  currencyOptions: [],
}

export const currencyOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPTIONS:
      return {
        currencyOptions: [action.payload.base, ...Object.keys(action.payload.rates)]
      }

    default:
      return state;
  }
};
