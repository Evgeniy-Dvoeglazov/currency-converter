import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { amountReducer } from './amountReducer';
import { currencyOptionsReducer } from './currencyOptionsReducer';
import { fromCurrencyReducer } from './fromCurrencyReducer';
import { toCurrencyReducer } from './toCurrencyReducer';
import { exchangeRateReducer } from './exchangeRateReducer';
import { serverErrorReducer } from './serverErrorReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  amount: amountReducer,
  currencyOptions: currencyOptionsReducer,
  fromCurrency: fromCurrencyReducer,
  toCurrency: toCurrencyReducer,
  exchangeRate: exchangeRateReducer,
  error: serverErrorReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
