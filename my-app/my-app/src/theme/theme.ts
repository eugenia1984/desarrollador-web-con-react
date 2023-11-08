import { purple, lime } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: lime[500],
    }
  },
  typography: {
    h1: {
      fontSize: '1.75rem', 
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.50rem',
      fontWeight: 600,
      padding: '1rem 0.25rem'
    }
  },
});