// import './App.css'



import { Container } from '@mui/material'
import NewConfig from './pages/NewConfig'

function App () {
  return (
    <Container
      maxWidth='sm'
      component='main'
      sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <NewConfig/>
    </Container>
  )
}

export default App


