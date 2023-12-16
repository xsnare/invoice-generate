// import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import App from './App.jsx'


// import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}></ThemeProvider>
      <CssBaseline />
      <App />
    </BrowserRouter>
)
