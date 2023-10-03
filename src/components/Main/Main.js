import styled from 'styled-components';
import mainImage from '../../images/main-image.png'

function Main() {

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

    &:hover {
      opacity: 1;
      box-shadow: 0px 0px 10px white;
    }
  `;

  return (
    <Main>
      <Intro>
        <Title>Конвертер валют</Title>
        <Image src={mainImage} />
      </Intro>
      <Button>Начать</Button>
    </Main>
  )
}

export default Main;
