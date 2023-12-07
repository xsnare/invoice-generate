import { useInvoiceStore } from '../stores/invoice'

export const useInvoice = function () {
  const addNewRow = useInvoiceStore(s => s.addNewRow)
  const deleteRow = useInvoiceStore(s => s.deleteRow)
  const details = useInvoiceStore(s => s.invoiceDetail)
  const handleChange = useInvoiceStore(s => s.handleChange)
  const hasTaxes = useInvoiceStore(s => s.hasTaxes)
  const saveInvoice = useInvoiceStore(s => s.saveInvoice)
  const toggleTaxes = useInvoiceStore(s => s.toggleTaxes)
  const totals = useInvoiceStore(s => s.totals)

  return {
    addNewRow,
    deleteRow,
    details,
    handleChange,
    hasTaxes,
    saveInvoice,
    toggleTaxes,
    totals
  }
}
