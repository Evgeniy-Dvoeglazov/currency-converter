import styled from 'styled-components';

function FooterComponent() {
  return (
    <Footer>
      <Title>Евгений Двоеглазов, 2023</Title>
    </Footer>
  )
}

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin: 40px 0;
  text-align: center;
  opacity: .2;
  letter-spacing: 2px;
`;

export default FooterComponent;
