import axios from 'axios';
import {
  BASE_URL,
  ADD_OPTIONS,
  ADD_EXCHANGE_RATE,
  ADD_FROM_CURRENCY,
  ADD_TO_CURRENCY
} from '../utils/constants';

export function getCurrency() {
  return function (dispatch) {
    axios.get(`${BASE_URL}/latest?from=USD`)
      .then((res) => {
        dispatch({ type: ADD_OPTIONS, payload: res.data });
        dispatch({ type: ADD_EXCHANGE_RATE, payload: res.data.rates[Object.keys(res.data.rates)[0]] });
        dispatch({ type: ADD_FROM_CURRENCY, payload: res.data.base });
        dispatch({ type: ADD_TO_CURRENCY, payload: Object.keys(res.data.rates)[8] });
      })
      .catch((err) => console.log(err));
  };
}

// export function getCurrencyCountry() {
//   return function (dispatch) {
//     axios.get(`${BASE_URL}/currencies`)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   };
// }

export function getChangedCurrency(fromCurrency, toCurrency) {
  return function (dispatch) {
    axios.get(`${BASE_URL}/latest?from=${fromCurrency}&to=${toCurrency}`)
      .then((res) => {
        dispatch({ type: ADD_EXCHANGE_RATE, payload: res.data.rates[toCurrency] })
      })
      .catch((err) => console.log(err));
  };
}
