import { useState } from 'react'
import { Button, Grid, Typography } from '@mui/material'

const BuyBtnAndMsg = () => {
  const [isShowned, setIsShowned] = useState<boolean>(false)

  const handleClick = () => {
    setIsShowned(!isShowned)
    setTimeout(() => {
      setIsShowned(false)
    }, 5000)
  }

  return (
    <Grid container display='flex' flexDirection='column' gap={3} alignItems='center'>
      <Button
        variant='contained'
        onClick={ handleClick }
        sx={ { width: '140px' } }
      >
        Buy
      </Button>
      {
        isShowned &&
        <Typography>
          Thanks for buying at <strong>Oh-la-la Shoes</strong>
        </Typography>
      }
    </Grid>
  )
}

export default BuyBtnAndMsg