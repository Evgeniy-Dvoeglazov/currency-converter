// import { AMOUNT } from "../utils/constants"

const initialState = {
  currencyValue: '0',
}

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return {
        currencyValue: action.payload
      }

    case 'REMOVE_LAST_VALUE':
      return {
        currencyValue: state.currencyValue.slice(0, -1)
      }

    default:
      return state;
  }
};
