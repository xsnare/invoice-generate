import { Container } from '@mui/material'

import InvoiceHeader from './InvoiceHeader'
import InvoiceDetail from './InvoiceDetail'
import InvoiceActions from './InvoiceActions'
import InvoiceTotals from './InvoiceTotals'


export default function CreateInvoice () {
  return (
    <>
    <Container component='section'>
      <InvoiceHeader/>
      <form>
        <InvoiceDetail/>
        <InvoiceTotals/>
        <InvoiceActions/>
      </form>
    </Container>
    </>
  )
}
