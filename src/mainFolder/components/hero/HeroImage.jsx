import { Box } from '@mui/material'
import React from 'react'

const HeroImage = () => {
  return (
   <Box sx={{width:'300px' ,height:'500px' ,display:'flex',flexDirection:"center",
    justifyContent:"center",alignItems:"center",textAlign:"center",width:'80%'
   }}>
    <img src='assets/student2.png' style={{width:'100%', height:'100%'}}/>
   </Box>
  )
}

export default HeroImage