import { Box, Typography } from '@mui/material'
import React from 'react'
import HeroDivider from './HeroDivider'

const HeroText = () => {
  return (
    <Box sx={{
        display:'flex',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:'500px'
    }}>
       <Box>
        <HeroDivider/>
       </Box>
       
    </Box>
  )
}

export default HeroText