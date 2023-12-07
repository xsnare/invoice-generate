import { useInvoice } from '../hooks/useInvoice'

export default function InvoiceTotals () {
  const { totals, hasTaxes, toggleTaxes } = useInvoice()
  const { formattedAmounts: { subtotal, tax, total } } = totals

  return (
    <fieldset>
      <legend>Totals</legend>
      <div>
        <p>Subtotal: ${subtotal || 0}</p>
        <div>
          {hasTaxes && <p>Taxes: ${tax || 0}</p>}
          <input type="checkbox" name="" id="" checked={hasTaxes} onChange={toggleTaxes}/>
        </div>
        <p>Total: ${total || 0}</p>
      </div>
    </fieldset>
  )
}

