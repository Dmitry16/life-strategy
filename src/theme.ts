import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypeText {
      darkGrey: string;
      blue: string;
      lightBlue: string;
      darkBlue: string;
      white: string;
  }
}


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
      darkGrey: '#333333',
      blue: '#2196f3',
      darkBlue: '#0d47a1',
      lightBlue: '#bbdefb',
      white: '#FFFFFF'
    },
  },
});

export default theme;
