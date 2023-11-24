import { Grid } from '@mui/material'

import pegasus from '../../assets/687965-1200-1200-002.png'
import pegasus2 from '../../assets/690124-1200-1200-001.png'
import pegasus3 from '../../assets/692133-1200-1200-003.png'
import pegasus4 from '../../assets/694358-1200-1200-004.png'

import Title from '../ui/Title'
import CardImg from '../ui/CardImg'
import TextDescription from '../ui/TextDescription'

import { description } from '../../constants/product'
import { price } from '../../constants/price'
import { sku } from '../../constants/sku'
import { stock } from '../../constants/stock'
import { gender } from '../../constants/gender'
import BuyBtnAndMsg from './BuyBtnAndMsg'
import { styles } from './Main.constants'

const Main = () => {
  const srcImgs = [pegasus, pegasus2, pegasus3, pegasus4]

  return (
    <main>
      < Title text='Pegasus 40 Premium' />
      < Title text='Nike' component='h3' />
      <Grid container spacing={ 4 } sx={ styles.CardContainer } >
        <Grid item xs={ 11 } sm={ 7 } sx={ styles.imgsContainer } >
          {
            srcImgs.map(srcImg => (
              <CardImg
                key={ srcImg }
                srcImg={ srcImg }
                altImg="Pegasus 40 Premium"
              />
            ))
          }
        </Grid>
        <Grid item xs={ 11 } sm={ 5 } sx={ styles.featContainer } >
          <TextDescription product={ description } />
          <TextDescription product={ price } />
          <TextDescription product={ sku } />
          <TextDescription product={ stock } />
          <TextDescription product={ gender } />
        </Grid>
      </Grid>
      < BuyBtnAndMsg />
    </main>
  )
}

export default Main