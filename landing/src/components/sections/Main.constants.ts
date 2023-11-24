import { lime } from '@mui/material/colors'

export const styles = {
  CardContainer: {
    m: '1.5rem auto',
    backgroundColor: lime[50],
    width: '90%',
    maxWidth: '800px',
    borderRadius: '16px',
    p: '1rem 0.5rem 2rem'
  },
  imgsContainer:  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px'
  },
  featContainer: {
    paddingRight: {
      xs: '0.25rem',
      sm: '2rem'
    }
  }
}