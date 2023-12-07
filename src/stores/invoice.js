import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { helpHttp } from '../helpers/helpHttp'
import { useConfigStore } from './config'

import { calculateAmounts } from '../helpers/calculateAmounts'
import { convertToCurrencyFormat } from '../helpers/convertToCurrencyFormat'

const initialState = {
  id: crypto.randomUUID(),
  description: '',
  rate: '',
  quantity: ''
}

const locale = {
  DOP: 'en-DO',
  USD: 'en-US',
  EUR: 'en-EU'
}

const endpoint = 'invoice'

export const useInvoiceStore = create(
  devtools(
    (set, get) => ({
      hasTaxes: true,
      invoiceDetail: [structuredClone(initialState)],
      totals: {
        unformattedAmounts: {},
        formattedAmounts: {}
      },
      // Actions
      handleChange: (index) => (e) => {
        const { name, value } = e.target
        const updatedForm = [...get().invoiceDetail]

        updatedForm[index][name] = Number(value) ? parseFloat(value) : value

        set({ invoiceDetail: updatedForm })
        get().createTotals()
      },
      toggleTaxes: () => {
        set(state => ({ hasTaxes: !state.hasTaxes }))
        get().createTotals()
      },
      createTotals: () => {
        const { invoiceDetail, hasTaxes } = get()
        const { taxes, currency } = useConfigStore.getState().config
        const unformattedAmounts =
          calculateAmounts(invoiceDetail, taxes, hasTaxes)
        const formattedAmounts =
          convertToCurrencyFormat(unformattedAmounts, locale, currency)

        set({
          totals: {
            unformattedAmounts,
            formattedAmounts
          }
        })
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

        set(state => ({ invoiceDetail: [...state.invoiceDetail, newRow] }))
      },
      saveInvoice: async (e) => {
        e.preventDefault()
        const { invoiceDetail, totals } = get()
        const config = useConfigStore.getState().config
        const { name, email } = Object.fromEntries(new FormData(e.target))
        const template = { ...initialState, id: crypto.randomUUID() }

        const data = {
          config,
          invoice: {
            details: invoiceDetail,
            email,
            name
          },
          totals
        }

        try {
          const response = await helpHttp.post(endpoint, data)
          if (response) {
            e.target.reset()
            set({ invoiceDetail: [template] })
            set({
              totals: {
                unformattedAmounts: {},
                formattedAmounts: {}
              }
            })
          }
        } catch (err) {
          console.log(err)
        }
      }
    })
  )
)
