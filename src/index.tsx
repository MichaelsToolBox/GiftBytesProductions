import { StyledEngineProvider } from '@mui/material/styles';
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import App from './HomePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);