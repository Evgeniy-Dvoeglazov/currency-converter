// редьюсер выбранной валюты которую меняем
import { ADD_FROM_CURRENCY } from "../utils/constants";

const initialState = {
  fromCurrency: '',
}

export const fromCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FROM_CURRENCY:
      return {
        fromCurrency: action.payload
      }

    default:
      return state;
  }
};
