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
      padding: '1rem 0.25rem 0.25rem'
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      padding: '0.25rem 0.25rem 0.75rem'
    },
    button: {
      fontSize: '15px',
      lineHeight: '21px',
      fontWeight: '700',
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontStyle: 'normal',
          fontSize: '16px',
          padding: '12px 18px'
        },
        text: {
          '&.Mui-focusVisible': {
            backgroundColor: 'black'
          },
          ':hover': {
            backgroundColor: 'red'
          }
        },
        containedPrimary: {
          background: purple[900],
          textTransform: 'uppercase',
          letterSpacing: '1px',
          ':hover': {
            backgroundColor: lime[800]
          }
        }
      }
    }
  }
});