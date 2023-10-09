import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <Title>Евгений Двоеглазов, 2023</Title>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: 100px 0 30px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  text-align: center;
  opacity: .2;
  letter-spacing: 2px;
`;

export default Footer;
