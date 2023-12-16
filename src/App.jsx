import { AppBar, Button, Container, Link, Stack, Toolbar, Typography } from '@mui/material'


import { Suspense, lazy, useEffect } from 'react'
import { useConfigStore } from './stores/config'
import { Routes, Route, NavLink } from 'react-router-dom'
import Testing from './new-pages/Testing'
import CreateInvoice from './new-pages/Invoice'

import Navigation from './new-pages/Navigation'
import Acontainer from './pages/Acontainer'



const LazyConfig = lazy(() => import('./new-pages/Config'))



function App () {
  const { fetchConfig } = useConfigStore()

  useEffect(() => {
    fetchConfig()
  }, [])


  return (
    <Container
      component='main' maxWidth='sm' disableGutters>
      {/* <ContainerPage/> */}
      {/* <NewConfig/> */}
      {/* <Invoice/> */}
      {/* <Acontainer/> */}
      <Navigation/>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyConfig/>
      </Suspense> */}
      {/* <CreateInvoice/> */}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          < Route path='/' element={<Testing/>}/>
          < Route path='/config' element={<LazyConfig/>}/>
          < Route path='/invoice' element={<CreateInvoice/>}/>
        </Routes>
      </Suspense>
    </Container>
  )
}

export default App


