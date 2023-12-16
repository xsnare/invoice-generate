import { Stack } from '@mui/material'
import { Info } from '../components/UI/Info'

export default function InvoiceHeader () {
  return (
    <header>
      <Info title='Create Invoice'>
        To complete the <strong>invoice page</strong>, enter customer details and product/service information. You can add additional rows to the details if needed. If you require assistance, please contact our support team.
      </Info>
    </header>
  )
}
