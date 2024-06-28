import { useState } from 'react'
import {Box, Container, ThemeProvider, createTheme} from '@mui/material';
import './App.css'
import Button from '@mui/material/Button';
import LandingPage from './mainFolder/pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)
  const [mode,setMode]=useState('light')
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    // <Container>
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={'background.default'}>
    <LandingPage mode={mode} setMode={setMode}/>
   </Box>
    </ThemeProvider>
    // {/* </Container> */}
  )
}

export default App
