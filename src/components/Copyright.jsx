import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.darkBlue" align="center">
      {'DoubleD_Tech © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
      // <Link color="inherit" href="https://mui.com/">
      //   Your Website
      // </Link>{' '}
  );
}
