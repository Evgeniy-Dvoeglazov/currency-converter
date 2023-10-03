import styled from 'styled-components';
import imageLogo from '../../images/logo.png';

function Header() {

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

  return (
    <Header>
      <Logo>
        <Image src={imageLogo} />
        <Title>CurrencyExchange</Title>
      </Logo>
    </Header>
  )
}

export default Header;
