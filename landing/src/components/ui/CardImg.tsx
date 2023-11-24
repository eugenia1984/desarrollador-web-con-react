import { FC } from 'react'
import { Box } from '@mui/material'

interface CardImgProps {
  srcImg: string,
  altImg: string
}

const CardImg: FC<CardImgProps> = ({ srcImg, altImg }) => {
  return (
    <Box
      component='img'
      src={ srcImg }
      alt={ altImg }
      sx={ {
        width: '100%',
        maxWidth: '146px',
        borderRadius: '14px'
      } }
    />
  )
}

export default CardImg