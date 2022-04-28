import React from 'react';
import ReactDOM from 'react-dom/client';

 //* styled components
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import {theme} from './styles/theme'

import App from './templates/App';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
