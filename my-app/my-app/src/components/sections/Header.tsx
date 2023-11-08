
import { FC } from 'react'

import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const Header:FC = () => {
  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static" elevation={7}>
        <Toolbar sx={ { alignItems:'flex-end' } }>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/cotton/40/sneakers--v2.png"
            alt="sneakers"
          />
          <Typography
            variant="h1"
            component="h1"
            sx={ { flexGrow: 1, marginLeft: '4px' } }
          >
            Oh-la-la Shoes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header