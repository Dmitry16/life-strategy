import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      second: '#E6F4F1'
    },
    secondary: {
      main: '#19857b',
      second: '#00B7FC',
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
