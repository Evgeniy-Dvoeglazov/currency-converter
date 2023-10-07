import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function NotFoundPageComponent() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/', { replace: true });
  }

  return (
    <NotFoundPage>
      <Title>404</Title>
      <Description>Страница не найдена</Description>
      <Button type='button' onClick={handleClick}>На главную</Button>
    </NotFoundPage>
  )
}

const NotFoundPage = styled.section`
  text-align: center;
  padding-top: 100px;
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

export default NotFoundPageComponent;
