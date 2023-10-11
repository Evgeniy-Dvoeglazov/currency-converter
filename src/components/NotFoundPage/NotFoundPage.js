import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/', { replace: true });
  }

  return (
    <Wrapper>
      <Title>404</Title>
      <Description>Страница не найдена</Description>
      <Button type='button' onClick={handleClick}>На главную</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  text-align: center;
  padding: 100px 0 30px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 130px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 20px;
  margin: 0 0 100px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  opacity: .4;
  padding: 10px;
  transition: opacity .2s linear;

  &:hover {
    opacity: 1;
  }
`;

export default NotFoundPage;
