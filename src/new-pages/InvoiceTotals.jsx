import { Button } from '@mui/material'

import '../totals.css'
import { useInvoice } from '../hooks/useInvoice'

export default function InvoiceTotals () {
  const { totals, hasTaxes, toggleTaxes } = useInvoice()
  const { formattedAmounts: { subtotal, tax, total } } = totals
  const { unformattedAmounts: { subtotal: sub, tax: tx } } = totals


  return (
    <div className='totals'>
      <div className="col">
        <div className='row'>
          <p className='title'>SUBTOTAL</p>
          <p className='subtitle'>{subtotal}</p>
          <div>
            <Button sx={{ padding: 0 }}>DISCOUNT</Button>
          </div>
        </div>
        <div className='row'>
          {hasTaxes && <p className='title'>TAX & RATE</p>}
          {hasTaxes && <p className='subtitle'>{tax}</p>}
          {hasTaxes && <p className='subtitle'>{(sub + tx) || 0}</p>}
          <div>
            <Button sx={{ padding: 0 }} onClick={toggleTaxes}>REMOVE TAX</Button>
          </div>
        </div>
        <div className='row'>
          <p className='title'>TOTAL</p>
          <p className='subtitle'>{total}</p>
        </div>
      </div>
    </div>
  )
}
