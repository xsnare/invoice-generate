import { create } from 'zustand'
import { getAllInvoices } from '../services/invoiceService'

export const useInvoiceListStore = create((set) => ({
  invoices: [],
  fetchInvoices: () => {
    getAllInvoices().then((res) => {
      set({ invoices: res })
    })
  },
  setInvoiceList: (invoiceList) => set({ invoiceList })
}))
