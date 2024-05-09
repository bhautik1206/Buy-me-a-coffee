import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';

import { ThemeProvider } from '#/components';
import Favicon from '#/components/Favicon';
import queryClient from '#/utils/queryClient';
import '#/assets/fonts/stylesheet.css';

const container = document.getElementById('root');

const root = createRoot(container, {});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position="bottom-right" />
      <ThemeProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Favicon />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
