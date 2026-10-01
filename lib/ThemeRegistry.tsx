'use client';
import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Custom Palette matching your Agnik Tech Solutions logo (Deep Navy, Electric Blue, Flame Amber)
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0a192f', // Deep circuit navy
      light: '#172a45',
    },
    secondary: {
      main: '#00b4d8', // Electric digital blue
      light: '#90e0ef',
      dark: '#0077b6',
    },
    warning: {
      main: '#f77f00', // Fiery flame accent orange matching the logo tip
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = React.useState(() => {
    const cache = createCache({ key: 'mui' });
    cache.compat = true;
    return cache;
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}