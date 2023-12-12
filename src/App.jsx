import { Container } from '@mui/material'


import { Suspense, lazy, useEffect } from 'react'
import { useConfigStore } from './stores/config'
import { Routes, Route, NavLink } from 'react-router-dom'
import Testing from './new-pages/Testing'
import CreateInvoice from './new-pages/CreateInvoice'
const LazyConfig = lazy(() => import('./new-pages/Config'))



function App () {
  const { fetchConfig } = useConfigStore()

  useEffect(() => {
    fetchConfig()
  }, [])


  return (
    <Container maxWidth='sm' sx={{ mt: 4 }}>
      {/* <NewConfig/> */}
      {/* <Invoice/> */}

      {/* <nav>
        <ul>
          <li><NavLink to='/config'>Config</NavLink></li>
          <li><NavLink to='/'>testing</NavLink></li>
        </ul>
      </nav> */}

      {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyConfig/>
      </Suspense> */}
      <CreateInvoice/>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          < Route path='/config' element={<LazyConfig/>}/>
          < Route path='/' element={<Testing/>}/>
        </Routes>
      </Suspense> */}
    </Container>
  )
}

export default App


