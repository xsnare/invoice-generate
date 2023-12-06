import { useInvoiceStore } from '../../../stores/invoice'
export const useInvoice = function () {
  const addNewRow = useInvoiceStore(s => s.addNewRow)
  const deleteRow = useInvoiceStore(s => s.deleteRow)
  const handleChange = useInvoiceStore(s => s.handleChange)
  const setInvoice = useInvoiceStore(s => s.setInvoice)
  const details = useInvoiceStore(s => s.invoiceDetail)

  return {
    addNewRow,
    deleteRow,
    handleChange,
    setInvoice,
    details
  }
}
