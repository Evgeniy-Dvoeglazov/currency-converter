// редьюсер выбранной валюты на которую меняем
import { ADD_TO_CURRENCY } from "../utils/constants";

const initialState = {
  toCurrency: '',
}

export const toCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CURRENCY:
      return {
        toCurrency: action.payload
      }

    default:
      return state;
  }
};
