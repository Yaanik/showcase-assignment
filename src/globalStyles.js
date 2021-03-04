import styled, {createGlobalStyle} from 'styled-components';
import {colors} from './utils/colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Poppins',  'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.white};
    color: ${colors.dark};
    overflow: hidden;
    overflow-y: auto;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`

export const H1 = styled.h1`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 72px;
  line-height: 72px;

  mark {
    background: transparent;
    color: ${colors.main};
  }
`

export const H2 = styled.h2`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  margin: 0;
  letter-spacing: 0.015em;
  
  mark {
    background: transparent;
    color: ${colors.main};
  }
`

export const SubText = styled.p`
  font-family: Open Sans, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0;
  text-align: center;
`