import styled from 'styled-components';
import changeImage from '../../images/changer.svg';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import {
  ADD_VALUE,
  REMOVE_LAST_VALUE,
  ADD_FROM_CURRENCY,
  ADD_TO_CURRENCY,
  maxLength,
  buttonsText
} from '../../utils/constants';

function Converter(props) {
  const dispatch = useDispatch();

  const buttons = buttonsText.map((buttonText) => {
    return (
      <ListEl key={buttonText}>
        <Button type='button' onClick={handleClick}>{buttonText}</Button>
      </ListEl>
    )
  });

  const amountValue = useSelector(state => state.amount.amount);
  const fromCurrency = useSelector(state => state.fromCurrency.fromCurrency);
  const toCurrency = useSelector(state => state.toCurrency.toCurrency);

  function addValue(value) {
    dispatch({ type: ADD_VALUE, payload: value });
  }

  function removeLastValue() {
    dispatch({ type: REMOVE_LAST_VALUE });
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
    dispatch({ type: ADD_FROM_CURRENCY, payload: toCurrency });
    dispatch({ type: ADD_TO_CURRENCY, payload: fromCurrency });
  }

  return (
    <Wrapper>
      <Currency>
        <CurrencyRow
          titleText='From'
          displayText={amountValue || '0'}
          toCurrency={toCurrency}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(selectedOption) => dispatch({ type: ADD_FROM_CURRENCY, payload: selectedOption.label })}
        />
        <ChangeButton aria-label='кнопка переворота валют' type='button' onClick={handleChangeBtnClick}></ChangeButton>
        <CurrencyRow
          titleText='To'
          displayText={props.toAmount.toFixed(2)}
          fromCurrency={fromCurrency}
          selectedCurrency={toCurrency}
          onChangeCurrency={selectedOption => dispatch({ type: ADD_TO_CURRENCY, payload: selectedOption.label })}
        />
      </Currency>
      <Buttons>{buttons}</Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  gap: 150px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin: 0 auto 30px;
    gap: 100px;
  }

  @media screen and (max-width: 768px) {
    gap: 40px;
  }

  @media screen and (max-width: 576px) {
    display: block;
    padding: 0 15px;
  }
`;

const Currency = styled.div``;

const Buttons = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 280px;
  gap: 15px;
  margin: 0 59.33px 0 0;
  padding: 0;

  @media screen and (max-width: 1024px) {
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0 0;
    width: 170px;
  }

  @media screen and (max-width: 576px) {
    margin: 20px auto 0;
    width: 200px;
  }
`;

const ListEl = styled.li`
  list-style-type: none;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: #fff;
  width: 70px;
  height: 70px;
  font-size: 24px;
  box-shadow: 1px 1px 2px black, -1px -1px 2px white;
  cursor: pointer;
  padding: 0;

  &:active {
    box-shadow: none;
    border: 1px solid #1c1c1c;
  }

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
`;

const ChangeButton = styled.button`
  display: block;
  margin: 10px auto;
  width: 30px;
  height: 30px;
  background-image: url(${changeImage});
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: .6;
  transition: opacity .2s linear;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    width: 25px;
    height: 25px;
  }
`;

export default Converter;
