import HeaderComponent from '../Header/Header';
import MainComponent from '../Main/Main';
import ExchangerComponent from '../Exchanger/Exchanger';
import FooterComponent from '../Footer/Footer';
import NotFoundPageComponent from '../NotFoundPage/NotFoundPage'
import styled from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrency, getChangedCurrency } from '../../asyncActions/currency';

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
  }, [])

  useEffect(() => {
    if (fromCurrency !== '' && toCurrency !== '') {
      dispatch(getChangedCurrency(fromCurrency, toCurrency));
    }
  }, [fromCurrency, toCurrency])

  return (
    <Application>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={
          <MainComponent />
        } />
        <Route path='/exchanger' element={
          <ExchangerComponent
            toAmount={toAmount}
          />
        } />
        <Route path='*' element={
          <NotFoundPageComponent />
        } />
      </Routes>
      <FooterComponent />
    </Application>
  );
}

const Application = styled.div`
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
