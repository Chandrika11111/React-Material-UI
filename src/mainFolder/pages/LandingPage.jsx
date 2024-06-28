import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../components/navSection/NavBar'
import HeroSection from '../components/hero/HeroSection'
import AccordianSection from '../components/navSection/AccordianSection'
import CardDisplay from '../components/cards/CardDisplay'
import MainTabs from '../components/tabSection/MainTab'
import MainGraph from '../components/graphSection/MainGraph'

const LandingPage = ({mode,setMode}) => {
  return (
   <Box>
    <NavBar mode={mode} setMode={setMode}/>
    <HeroSection/>
    <AccordianSection/>
    <CardDisplay/>
    <MainTabs/>
    <MainGraph/>
   </Box>
  )
}

export default LandingPage