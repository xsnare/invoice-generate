import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { helpHttp } from '../helpers/helpHttp'
import { useConfigStore } from './config'

import { calculateAmounts } from '../helpers/calculateAmounts'

const initialState = {
  id: crypto.randomUUID(),
  description: '',
  rate: '',
  quantity: ''
}


export const useInvoiceStore = create(
  devtools(
    (set, get) => ({
      invoiceDetail: [structuredClone(initialState)],
      totals: {
        subtotal: 0,
        tax: 0,
        total: 0
      },
      // Actions
      handleChange: (e, index) => {
        const { name, value } = e.target
        const updatedForm = [...get().invoiceDetail]

        updatedForm[index][name] = Number(value) ? parseFloat(value) : value

        set({ invoiceDetail: updatedForm })
        get().createTotals()
      },
      createTotals: () => {
        const { invoiceDetail } = get()
        const calculatedAmounts = calculateAmounts(invoiceDetail)
        set({ totals: calculatedAmounts })
      },
      deleteRow: (_id) => {
        const newInvoice = get().invoiceDetail.filter(({ id }) => id !== _id)
        set({ invoiceDetail: newInvoice })
        get().createTotals()
      },
      addNewRow: () => {
        const newRow = {
          ...initialState,
          id: crypto.randomUUID()
        }

        set(state => ({
          invoiceDetail: [...state.invoiceDetail, newRow]
        }))
      },
      saveInvoice: async (e) => {
        e.preventDefault()
        const { invoiceDetail } = get()
        const config = useConfigStore.getState().config
        const { name, email } = Object.fromEntries(new FormData(e.target))

        const data = {
          config,
          invoice: {
            details: invoiceDetail,
            email,
            name
          }
        }

        const template = {
          ...initialState,
          id: crypto.randomUUID()
        }

        try {
          const response = await helpHttp.post('invoice', data)
          if (response) {
            e.target.reset()
            set({ invoiceDetail: [template] })
          }
        } catch (err) {
          console.log(err)
        }
      }
    })
  )
)
