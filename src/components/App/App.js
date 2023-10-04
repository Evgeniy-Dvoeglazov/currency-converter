import HeaderComponent from '../Header/Header';
import MainComponent from '../Main/Main';
import ExchangerComponent from '../Exchanger/Exchanger';
import FooterComponent from '../Footer/Footer';
import NotFoundPageComponent from '../NotFoundPage/NotFoundPage'
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AMOUNT,
} from '../../utils/constants';

function App() {

  const dispatch = useDispatch();

  function setAmount(amount) {
    dispatch({ type: AMOUNT, payload: amount })
  }

  return (
    <Application>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={
          <MainComponent />
        } />
        <Route path='/exchanger' element={
          <ExchangerComponent />
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
  height: 100vh;
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
`;

export default App;
