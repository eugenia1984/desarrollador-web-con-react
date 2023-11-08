import { Grid, Typography } from '@mui/material'
import { lime } from '@mui/material/colors'

import rider from '../../assets/1703767-00-A_0_2000.png'

import CardImg from '../ui/CardImg'
import TextDescription from '../ui/TextDescription'

import { description } from '../../constants/product'
import { price } from '../../constants/price'
import { sku } from '../../constants/sku'
import { stock } from '../../constants/stock'
import { gender } from '../../constants/gender'

const Main = () => {
  return (
    <main>
      <Typography component='h2' variant='h2' textAlign='center'>
        Rider FV Mix Match Toddlers' Sneakers - Puma
      </Typography>
      <Grid
        container
        spacing={ 4 }
        sx={ {
          m: '1.5rem auto',
          backgroundColor: lime[50],
          width: '90%',
          maxWidth: '800px',
          borderRadius: '16px',
          p: '1rem 0.5rem 2rem'
        } }
      >
        <Grid item xs={ 11 } sm={ 6 }>
          <CardImg
            srcImg={ rider }
            altImg=" Rider FV Mix Match Toddlers' Sneakers"
          />
        </Grid>
        <Grid
          item
          xs={ 11 }
          sm={ 6 }
          sx={ { paddingRight: { xs: '0.25rem', sm: '2rem' } } }
        >
          <TextDescription product={ description } />
          <TextDescription product={ price } />
          <TextDescription product={ sku } />
          <TextDescription product={ stock } />
          <TextDescription product={ gender } />
        </Grid>
      </Grid>
    </main>
  )
}

export default Main