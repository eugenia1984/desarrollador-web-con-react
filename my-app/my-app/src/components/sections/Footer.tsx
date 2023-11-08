import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { purple, grey } from '@mui/material/colors'

const Footer: FC = () => {
  return (
    <footer>
      <Box
        sx={ {
          flexGrow: 1,
          backgroundColor: purple[900],
          padding: '1.25rem 1rem'
        } }>
        <Typography
          sx={ {
            color: grey[50],
            textAlign: 'center'
          } }
        >
          Práctica realizada por <a href="https://www.linkedin.com/in/maria-eugenia-costa/" target="_blank" >María Eugenia Costa</a>
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer