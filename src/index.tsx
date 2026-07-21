import { StyledEngineProvider } from '@mui/material/styles';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import * as ReactDOM from 'react-dom/client';
import HomePage from './home-page';
import * as React from 'react';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InitColorSchemeScript attribute="data-mui-color-scheme" defaultMode="system" />
    <StyledEngineProvider injectFirst>
      <HomePage />
    </StyledEngineProvider>
  </React.StrictMode>,
);
