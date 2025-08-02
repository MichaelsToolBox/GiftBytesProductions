import { StyledEngineProvider } from '@mui/material/styles';
import * as ReactDOM from 'react-dom/client';
import HomePage from './home-page';
import * as React from 'react';
import './i18n'; // Import the i18next configuration

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <HomePage />
    </StyledEngineProvider>
  </React.StrictMode>
);
