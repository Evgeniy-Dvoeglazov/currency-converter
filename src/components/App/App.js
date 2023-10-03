import Header from '../Header/Header';
import Main from '../Main/Main';
import Exchanger from '../Exchanger/Exchanger';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

function App() {

  const App = styled.div`
    // height: 100vh;
    background: #282828;
    color: #fff;
    margin: 0;
    padding: 0;
    min-width: 320px;
    box-sizing: border-box;
    font-family: 'Inter', 'Arial', 'Helvetica', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  `;

  return (
    <App>
      <Header />
      <Main />
      <Exchanger />
      <Footer />
    </App>
  );
}

export default App;
