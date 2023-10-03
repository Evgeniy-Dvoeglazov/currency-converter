import styled from 'styled-components';

function Footer() {

  const Footer = styled.footer`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  `;

  const Title = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin: 40px 0;
    text-align: center;
  `;

  return (
    <Footer>
      <Title>Евгений Двоеглазов, {new Date().getFullYear()}</Title>
    </Footer>
  )
}

export default Footer;
