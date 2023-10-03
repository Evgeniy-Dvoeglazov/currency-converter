import styled from 'styled-components';
import exchangeImage from '../../images/logo.png'

function Exchanger() {

  const buttonsText = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', 'DEL'];

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
  `;

  const Image = styled.img`
    display: block;
    margin: 40px auto;
    width: 30px;
  `;

  const buttons = buttonsText.map((buttonText) => {
    return(
      <Button>{buttonText}</Button>
    )
  });

  return (
    <Exchanger>
      <FromCurrency></FromCurrency>
      <Image src={exchangeImage} />
      <ToCurrency></ToCurrency>
      <Buttons>{buttons}</Buttons>
    </Exchanger>
  )
}

export default Exchanger;
