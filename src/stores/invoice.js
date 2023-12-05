import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createInvoice } from '../services/invoiceService'

const initialState = [
  {
    id: crypto.randomUUID(),
    description: '',
    rate: '',
    quantity: ''
  }
]

export const useInvoiceStore = create(
  devtools(
    (set, get) => ({
      invoiceDetail: initialState,
      handleChange: (e, index) => {
        const { name, value } = e.target
        const updatedForm = [...get().invoiceDetail]

        updatedForm[index][name] =
          Number(value)
            ? parseFloat(value)
            : value

        set({ invoiceDetail: updatedForm })
      },
      deleteRow: (_id) => {
        const temp = [...get().invoiceDetail].filter(({ id }) => id !== _id)

        set({ invoiceDetail: temp })
      },
      addNewRow: () => {
        const template = {
          id: crypto.randomUUID(),
          description: '',
          rate: '',
          quantity: ''
        }

        set(state => ({
          invoiceDetail: [
            ...state.invoiceDetail,
            template
          ]
        }))
      },
      setInvoice: (e) => {
        e.preventDefault()
        const details = [...get().invoiceDetail]
        const { name, email } =
          Object.fromEntries(new FormData(e.target))

        const invoice = {
          name,
          email,
          details
        }

        createInvoice(invoice).then(res => {
          e.target.reset()
          set({
            invoiceDetail: [{
              ...initialState,
              id: crypto.randomUUID()
            }]
          })
        })
      }
    })
  )
)
