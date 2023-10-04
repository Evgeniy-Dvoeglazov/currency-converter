import { legacy_createStore as createStore, combineReducers } from 'redux';
import { currencyReducer } from './currencyReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export const store = createStore(rootReducer);
