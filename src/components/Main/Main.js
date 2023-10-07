import { styled, keyframes } from 'styled-components';
import mainImage from '../../images/main-image.png';
import { useNavigate } from 'react-router-dom';

function MainComponent() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/exchanger');
  }

  return (
    <Main>
      <Intro>
        <Title>Конвертер валют</Title>
        <Image src={mainImage} alt='изображение монет' />
      </Intro>
      <Button type='button' onClick={handleClick}>Начать<Flare></Flare></Button>
    </Main>
  )
}

const Main = styled.main`
  padding: 0 100px;
`;

const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 100px;
  max-width: 40%;
  margin: 0;
  text-transform: uppercase;
  line-height: 1.3;
  letter-spacing: 5px;
`;

const Image = styled.img`
  width: 500px;
  margin: 0;
`;

const flareAnimation = keyframes`
  0% {
    left: -150%;
  }

  50% {
    left: -140%;
  }

  70% {
    left: 140%;
  }

  100% {
    left: 150%;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  padding: 20px 80px;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 24px;
  opacity: .7;
  transition: opacity .2s linear, box-shadow .2s linear;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px white;
  }
`;

const Flare = styled.span`
  position: absolute;
  top: 0;
  height: 100%;
  width: 35px;
  transform: skewX(-45deg); // Наклон
  left: -150%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
  animation: ${flareAnimation} 8s infinite linear;
`;

export default MainComponent;
