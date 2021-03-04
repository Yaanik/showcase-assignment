import logo from './logo.svg';
import Home from './pages/home';
import Navbar from './components/navbar';
import styled from 'styled-components';
import {colors} from './utils/colors';


const Layout = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-self: center;
  max-width: 1240px;
  width: 1240px;
  margin: auto;
  background-color: ${colors.white};
  color: ${colors.dark};
  font-family: 'Open Sans',sans-serif;
`

function App() {
  return (
          <>
              <Navbar />
              <Home />
          </>
  );
}

export default App;
