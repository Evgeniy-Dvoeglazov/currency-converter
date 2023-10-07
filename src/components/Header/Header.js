import styled from 'styled-components';
import imageLogo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/', { replace: true });
  }

  return (
    <Header>
      <Logo type='button' onClick={handleClick}>
        <Image src={imageLogo} alt='значок обмена' />
        <Title>CurrencyExchange</Title>
      </Logo>
    </Header>
  )
}

const Header = styled.header`
  padding: 40px 100px;
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
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 0 15px;
`;

export default HeaderComponent;
