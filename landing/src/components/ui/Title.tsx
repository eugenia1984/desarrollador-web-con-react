import { FC } from 'react'
import { Typography } from '@mui/material'
import { Component } from '../../constants/types'

interface TitleProps {
  text: string
  component?: Component
}
const Title: FC<TitleProps> = ({
  text,
  component
}) => {
  return (
    <Typography
      component={ component? component: 'h2'}
      variant={ component? component: 'h2'}
      textAlign='center'
    >
      { text }
    </Typography>
  )
}

export default Title