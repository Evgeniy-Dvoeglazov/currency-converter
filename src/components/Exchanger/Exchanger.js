import styled from 'styled-components';
import exchangeImage from '../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyRow  from '../CurrencyRow/CurrencyRow';
import {
  ADD_VALUE,
  REMOVE_LAST_VALUE,
  ADD_FROM_CURRENCY,
  ADD_TO_CURRENCY,
  maxLength
} from '../../utils/constants';

function ExchangerComponent(props) {

  const dispatch = useDispatch();

  const buttonsText = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'DEL'];

  const buttons = buttonsText.map((buttonText) => {
    return (
      <Button type='button' onClick={handleClick} key={buttonText}>{buttonText}</Button>
    )
  });

  const amountValue = useSelector(state => state.amount.amount);
  const fromCurrency = useSelector(state => state.fromCurrency.fromCurrency);
  const toCurrency = useSelector(state => state.toCurrency.toCurrency);

  function addValue(value) {
    dispatch({ type: ADD_VALUE, payload: value })
  }

  function removeLastValue() {
    dispatch({ type: REMOVE_LAST_VALUE })
  }

  function handleClick(e) {
    if (e.target.textContent === '.' && amountValue.includes('.')) {
      return;
    }
    if (e.target.textContent === 'DEL') {
      removeLastValue();
      return;
    }
    if (amountValue.length < maxLength) {
      if (amountValue.length === 1 && amountValue[0] === '0' && e.target.textContent !== '.' && e.target.textContent !== 'DEL') {
        addValue('' + e.target.textContent);
      } else if (amountValue[0] == null && e.target.textContent === '.') {
        addValue('0' + e.target.textContent);
      } else {
        addValue(amountValue + e.target.textContent);
      }
    } else return;
  }

  function handleChangeBtnClick() {
    console.log(toCurrency, fromCurrency);
    dispatch({ type: ADD_FROM_CURRENCY, payload: toCurrency });
    dispatch({ type: ADD_TO_CURRENCY, payload: fromCurrency });
  }

  return (
    <Exchanger>
      <CurrencyRow
        titleText='From'
        displayText={amountValue || '0'}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(selectedOption) =>dispatch({ type: ADD_FROM_CURRENCY, payload: selectedOption.label })}
      />
      <Image src={exchangeImage} alt='значок обмена' onClick={handleChangeBtnClick} />
      <CurrencyRow
        titleText='To'
        displayText={props.toAmount.toFixed(2)}
        selectedCurrency={toCurrency}
        onChangeCurrency={selectedOption =>dispatch({ type: ADD_TO_CURRENCY, payload: selectedOption.label })}
      />
      <Buttons>{buttons}</Buttons>
    </Exchanger>
  )
}

const Exchanger = styled.section`
  margin: 50px auto 0;
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

const Image = styled.img`
  display: block;
  margin: 15px auto;
  width: 30px;
`;

export default ExchangerComponent;
