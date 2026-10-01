'use client';
import { createTheme } from '@mui/material/styles';

/*
  Brand theme built from the Agnik logo:
  navy (primary), electric blue (secondary) and fire orange (warning).
  Supports light and dark mode (toggle lives in the floating menu).
*/
const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#0A192F', light: '#112240', dark: '#060F1E', contrastText: '#FFFFFF' },
        secondary: { main: '#00B4D8', light: '#48CAE4', dark: '#0090AD', contrastText: '#0A192F' },
        warning: { main: '#F77F00', light: '#FF9F2E', dark: '#D96C00', contrastText: '#FFFFFF' },
        background: { default: '#F5F9FC', paper: '#FFFFFF' },
        text: { primary: '#0A192F', secondary: '#4A5B70' },
        divider: 'rgba(10, 25, 47, 0.1)',
      },
    },
    dark: {
      palette: {
        // Navy stays navy so dark hero sections and the header look the same in both modes
        primary: { main: '#0A192F', light: '#112240', dark: '#060F1E', contrastText: '#FFFFFF' },
        secondary: { main: '#00B4D8', light: '#48CAE4', dark: '#0090AD', contrastText: '#0A192F' },
        warning: { main: '#F77F00', light: '#FF9F2E', dark: '#D96C00', contrastText: '#FFFFFF' },
        background: { default: '#050D1A', paper: '#0E1C33' },
        text: { primary: '#EAF2FB', secondary: '#9FB1C7' },
        divider: 'rgba(255, 255, 255, 0.12)',
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins), "Segoe UI", Roboto, Arial, sans-serif',
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' },
        '::selection': { backgroundColor: '#00B4D8', color: '#0A192F' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
  },
});

export default theme;
