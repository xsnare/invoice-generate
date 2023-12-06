import { useInvoice } from './hooks/useInvoice'
import InvoiceHeader from './components/InvoiceHeader'
import InvoiceDetail from './components/InvoiceDetail'

export default function Invoice () {
  const { addNewRow, setInvoice } = useInvoice()

  return (
    <>
      <form onSubmit={setInvoice}>
        <InvoiceHeader/>
        <InvoiceDetail />
        <button type="button" onClick={addNewRow}>Add row</button>
        <button type="submit">Save</button>
      </form>
    </>
  )
}
