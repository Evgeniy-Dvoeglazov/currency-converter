import { styled, keyframes } from 'styled-components';
import mainImageMin from '../../images/main-image@1x.png';
import mainImageMid from '../../images/main-image@2x.png';
import mainImageMax from '../../images/main-image@3x.png';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/converter', { replace: true });
  }

  return (
    <Wrapper>
      <Intro>
        <Title>Конвертер валют</Title>
        <Image src={mainImageMin} srcSet={`${mainImageMid} 2x, ${mainImageMax} 3x`} alt='изображение монет' />
      </Intro>
      <Button type='button' onClick={handleClick}>Начать<Flare></Flare></Button>
    </Wrapper>
  )
}

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

const Wrapper = styled.main`
  padding: 0 100px;

  @media screen and (max-width: 1280px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 425px) {
    padding: 0 15px;
  }
`;

const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 100px;
  margin: 0;
  text-transform: uppercase;
  line-height: 1.3;
  letter-spacing: 5px;
  width: 50%;

  @media screen and (max-width: 1440px) {
    width: 500px;
    font-size: 80px;
  }

  @media screen and (max-width: 1280px) {
    font-size: 70px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }

  @media screen and (max-width: 425px) {
    width: 250px;
    font-size: 34px;
  }
`;

const Image = styled.img`
  width: 450px;
  margin: 0;

  @media screen and (max-width: 1440px) {
    width: 400px;
  }

  @media screen and (max-width: 1024px) {
    margin: 50px 0;
    width: 300px;
  }

  @media screen and (max-width: 425px) {
    width: 70%;
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

  @media screen and (max-width: 1440px) {
    padding: 15px 60px;
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

export default Main;
