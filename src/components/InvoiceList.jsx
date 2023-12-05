import { useEffect } from 'react'
import { useInvoiceListStore } from '../stores/invoiceList'

export default function InvoiceList () {
  const invoices = useInvoiceListStore(s => s.invoices)
  const fetchInvoices = useInvoiceListStore(s => s.fetchInvoices)

  useEffect(() => {
    fetchInvoices()
  }, [])

  return (
    <div>
      <h3>Invoice List</h3>
      {invoices.map(({ id, name }) => (
        <ul key={id}>
          <li>
            <p>{ name }</p>
            <button>x</button>
          </li>
        </ul>
      ))}
    </div>
  )
}
