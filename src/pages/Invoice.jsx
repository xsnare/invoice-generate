import InvoiceDetail from '../components/InvoiceDetail'
import InvoiceHeader from '../components/InvoiceHeader'
import InvoiceTotals from '../components/InvoiceTotals'
import { useInvoice } from '../hooks/useInvoice'

export default function Invoice () {
  const { addNewRow, saveInvoice } = useInvoice()

  return (
    <>
      <form onSubmit={saveInvoice}>
        <InvoiceHeader/>
        <button>+</button>
        <InvoiceDetail />
        <InvoiceTotals/>
        <button type="button" onClick={addNewRow}>Add row</button>
        <button type="submit">Save</button>
      </form>
    </>
  )
}
