import Header from '../Header/Header';
import Main from '../Main/Main';
import Converter from '../Converter/Converter';
import Footer from '../Footer/Footer';
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrency, getChangedCurrency, getCurrencyCountry } from '../../asyncActions/currency';

function App() {

  const dispatch = useDispatch();

  const amount = useSelector(state => state.amount.amount);
  const exchangeRate = useSelector(state => state.exchangeRate.exchangeRate);
  const fromCurrency = useSelector(state => state.fromCurrency.fromCurrency);
  const toCurrency = useSelector(state => state.toCurrency.toCurrency);

  const navigate = useNavigate();
  const toAmount = amount * exchangeRate;

  useEffect(() => {
    navigate('/', { replace: true });
    dispatch(getCurrency());
    // dispatch(getCurrencyCountry());
  }, [])

  useEffect(() => {
    if (fromCurrency !== '' && toCurrency !== '' && fromCurrency !== toCurrency) {
      dispatch(getChangedCurrency(fromCurrency, toCurrency));
    }
  }, [fromCurrency, toCurrency])

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={
          <Main />
        } />
        <Route path='/converter' element={
          <Converter
            toAmount={toAmount}
          />
        } />
        <Route path='*' element={
          <NotFoundPage />
        } />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: #282828;
  color: #fff;
  margin: 0;
  padding: 0;
  min-width: 320px;
  box-sizing: border-box;
  font-family: 'Inter', 'Arial', 'Helvetica', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  overflow: hidden;
`;

export default App;
