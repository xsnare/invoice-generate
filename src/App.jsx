import { useEffect } from 'react'
import './App.css'

import Config from './pages/Config'
import Invoice from './pages/Invoice'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { useConfig } from './hooks/useConfig'

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}

const InvoiceList = () => {
  const route = ['Invoice 1', 'Invoice 2', 'Invoice 3']
  return (
    <>
      <h3>Invoice List</h3>
      <ul>
        {route.map(invoice => (
          <li key={invoice}>
            <Link to={`/invoices/${invoice}`}>{invoice}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const Products = () => {
  const { name } = useParams()
  return (
    <>
      <h3>Products List</h3>
      <p>{name}</p>

      <Link to='/invoices'>Back</Link>
    </>
  )
}

function App () {
  const { fetchConfig } = useConfig()
  useEffect(() => {
    fetchConfig()
  }, [])
  return (
    <div>
      <div>
        <header>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/config'>Config</Link></li>
            <li><Link to='/invoice'>Invoice</Link></li>
            <li><Link to='/invoices'>invoices</Link></li>
          </ul>
        </header>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/config' element={<Config />} />
        <Route path='/invoice' element={<Invoice />} />
        <Route path='/invoices' element={<InvoiceList />} />
        <Route path='/invoices/:name' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App


