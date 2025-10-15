import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  font-weight: 300;
  line-height: 1.2;
  overflow-x:hidden;
  color:${(props) => props.theme.black}
  }
  body::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  a {
    color:inherit;
  }
  button,input {
    color:inherit;
    background-color: transparent;
    border:none;
    outline: none;
  }
  a,button {
    user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  }
  div,span,h1,h2,h3,h4,h5,h6,p{
    cursor:default;
  }
`;

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </>
);
