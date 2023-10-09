import styled from 'styled-components';
import imageLogo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/', { replace: true });
  }

  return (
    <Wrapper>
      <Logo type='button' onClick={handleClick}>
        <Image src={imageLogo} alt='значок обмена' />
        <Title>CurrencyConverter</Title>
      </Logo>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 40px 100px;

  @media screen and (max-width: 1280px) {
    padding: 30px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 30px 50px;
  }

  @media screen and (max-width: 425px) {
    padding: 20px 15px 50px;
  }
`;

const Logo = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  color: #fff;
  cursor: pointer;
`;

const Image = styled.img`
  width: 40px;
  transition: rotate 1s;

  ${Logo}:hover & {
    rotate: -180deg;
  }

  @media screen and (max-width: 425px) {
    width: 25px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 0 15px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
    margin: 0 0 0 10px;
  }
`;

export default Header;
