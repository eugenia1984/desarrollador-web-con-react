import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { ProductDescription } from '../../interfaces/product-description'

interface TextDescriptionProps {
  product: ProductDescription
}

const TextDescription: FC<TextDescriptionProps> = ({
  product
}) => {
  const { characteristic, text } = product
  return (
    <Typography mb={ 2 } >
      <Box
        component='span'
        sx={ {
          fontWeight: 900
        } }>
        { `${ characteristic }: ` }
      </Box>
      { text }
    </Typography>
  )
}

export default TextDescription