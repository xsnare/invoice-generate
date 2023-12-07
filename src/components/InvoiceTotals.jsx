import { useInvoice } from '../hooks/useInvoice'

export default function InvoiceTotals () {
  const { totals, hasTaxes, toggleTaxes } = useInvoice()
  const { subtotal, tax, total } = totals

  return (
    <fieldset>
      <legend>Totals</legend>
      <div>
        <p>Subtotal: ${subtotal}</p>
        <div>
          <p>Taxes: ${tax}</p>
          <input type="checkbox" name="" id="" checked={hasTaxes} onChange={toggleTaxes}/>
        </div>
        <p>Total: ${total}</p>
      </div>
    </fieldset>
  )
}

