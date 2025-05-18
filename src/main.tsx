// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import outputs from "../amplify_outputs.json";
import { Amplify } from 'aws-amplify';
Amplify.configure(outputs);


Amplify.configure(outputs);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
