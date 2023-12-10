import { create } from 'zustand'
import { helpHttp } from '../helpers/helpHttp'

export const useInvoiceListStore = create((set) => ({
  invoices: [],
  fetchInvoices: async () => {
    try {
      const response = await helpHttp.get('invoices')
      set({ invoices: response })
    } catch (err) {
      console.log(err)
    }
  }
}))
