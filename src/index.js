import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
