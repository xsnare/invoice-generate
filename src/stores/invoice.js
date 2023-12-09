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

const endpoint = 'invoices'

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

        const descriptions = invoiceDetail.map(({ description }) => description)

        const client = {
          name,
          email
        }

        const data = {
          config,
          invoice: {
            ...client,
            details: invoiceDetail,
            totals
          }
        }

        try {
          const [data1, data2] = await Promise.all([
            helpHttp.post(endpoint, data),
            helpHttp.post('clients', client)
          ])


          if (data1 && data2) {
            // localStorage.setItem('descriptions', JSON.stringify(descriptions))
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
