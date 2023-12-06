import { useInvoiceStore } from '../stores/invoice'

export const useInvoice = function () {
  const addNewRow = useInvoiceStore(s => s.addNewRow)
  const deleteRow = useInvoiceStore(s => s.deleteRow)
  const details = useInvoiceStore(s => s.invoiceDetail)
  const handleChange = useInvoiceStore(s => s.handleChange)
  const saveInvoice = useInvoiceStore(s => s.saveInvoice)
  const invoiceDetail = useInvoiceStore(s => s.invoiceDetail)

  return {
    addNewRow,
    deleteRow,
    details,
    handleChange,
    saveInvoice,
    invoiceDetail
  }
}
