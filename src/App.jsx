import React from 'react'
import './App.css'
import { Box, ThemeProvider, Typography } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import theme from './config/theme'

function App() {
  

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box>
          <Typography variant='link'>Helloooo</Typography>
        </Box>
      </ThemeProvider>

    </React.Fragment>
  )
}

export default App
