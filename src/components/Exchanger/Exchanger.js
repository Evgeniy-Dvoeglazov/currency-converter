import styled from 'styled-components';
import exchangeImage from '../../images/logo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ExchangerComponent() {

  const dispatch = useDispatch();

  // const [currency, setCurrency] = useState('0');

  const buttonsText = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', 'DEL'];

  const buttons = buttonsText.map((buttonText) => {
    return (
      <Button onClick={handleClick} key={buttonText}>{buttonText}</Button>
    )
  });

  const currencyValue = useSelector(state => state.currency.currencyValue);

  function addValue(value) {
    dispatch({ type: 'ADD_VALUE', payload: value })
  }

  function removeLastValue() {
    dispatch({ type: 'REMOVE_LAST_VALUE' })
  }

  function handleClick(e) {
    if (e.target.textContent === ',' && currencyValue.includes(',')) {
      return;
    }
    if (e.target.textContent === 'DEL') {
      removeLastValue();
    } else {
      if (currencyValue.length === 1 && currencyValue[0] === '0' && e.target.textContent !== ',') {
        addValue('' + e.target.textContent);
      } else if (currencyValue[0] == null && e.target.textContent === ',') {
        addValue('0' + e.target.textContent);
      } else {
        addValue(currencyValue + e.target.textContent);
      }
    }
  }

  console.log(currencyValue[0]);

  return (
    <Exchanger>
      <FromCurrency>{currencyValue || '0'}</FromCurrency>
      <Image src={exchangeImage} />
      <ToCurrency></ToCurrency>
      <Buttons>{buttons}</Buttons>
    </Exchanger>
  )
}

const Exchanger = styled.section`
  margin: 100px auto 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: #fff;
  width: 80px;
  height: 80px;
  font-size: 24px;
  box-shadow: 1px 1px 2px black, -1px -1px 2px white;
  cursor: pointer;

  &:active {
    box-shadow: none;
    border: 1px solid #1c1c1c;
  }
`;

const Buttons = styled.div`
  margin: 50px auto 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  gap: 15px
`;

const FromCurrency = styled.div`
  font-size: 30px;
  text-align: end;
  height: 40px;
  margin: 0 auto;
  width: 400px;
  border-bottom: 1px solid #fff;
`;

const ToCurrency = styled.div`
  height: 40px;
  margin: 0 auto;
  width: 400px;
  border-bottom: 1px solid #fff;
  text-align: end;
`;

const Image = styled.img`
  display: block;
  margin: 40px auto;
  width: 30px;
`;

export default ExchangerComponent;
