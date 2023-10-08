import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Select from 'react-select';

function CurrencyRowComponent(props) {
  console.log(props.disabled);

  const currencyOptions = useSelector(state => state.currencyOptions.currencyOptions);

  const options = currencyOptions.map((option) => {
    if (option === props.toCurrency || option === props.fromCurrency) {
      return { value: option, label: option, isDisabled: true}
    } else {
      return { value: option, label: option}
    }
  });
  const currentCurrency = {value: props.selectedCurrency, label: props.selectedCurrency}

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isDisabled ? 'rgba(255, 255, 255, .2)' : 'rgba(255, 255, 255)',
      backgroundColor: state.isFocused ? '#4c4c4c' : '#282828',
      cursor: 'pointer',
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: '#282828',
      padding: '10px',
      marginLeft: '10px',
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <CurrencyRow>
      <Display>
        <Title>{props.titleText}</Title>
        <Numbers>{props.displayText}</Numbers>
      </Display>
      <Select
        defaultValue={currentCurrency}
        value={currentCurrency}
        options={options}
        onChange={props.onChangeCurrency}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: 'hotpink',
            primary: 'black',
          },
        })}
        />
    </CurrencyRow>
  )
}

const Display = styled.div`
  width: 400px;
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: 10px;
  padding: 5px;
`;

const CurrencyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 59.33px;
  top: 0;
`;

const Title = styled.h2`
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  opacity: .4;
  text-align: start;
`;

const Numbers = styled.p`
  font-size: 30px;
  margin: 0;
  text-align: end;
`;

export default CurrencyRowComponent;
