import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { helpHttp } from '../helpers/helpHttp'
import { validateForm } from '../helpers/validateForm'

const initialState = {
  company: '',
  owner: '',
  email: '',
  phone: '',
  address: '',
  taxes: '18',
  currency: 'DOP'
}

const endpoint = 'config'

export const useConfigStore = create(
  devtools(
    (set, get) => ({
      config: initialState,
      error: null,
      errorMessage: null,
      isActive: true,
      loading: false,

      // Actions
      updateConfig: async (e) => {
        e.preventDefault()

        const isActive = get().isActive
        const fields = Object.fromEntries(new FormData(e.target))
        const msg = validateForm(fields)
        set({ errorMessage: msg })

        if (isActive) return
        if (msg !== null) return

        set({ loading: true, error: null })
        try {
          const response = await helpHttp.put(endpoint, fields)
          set({ config: response })
        } catch (err) {
          set({ error: 'Error updating config.' })
        } finally {
          set({ loading: false, isActive: true })
        }
      },
      fetchConfig: async () => {
        set({ loading: true, error: null })
        try {
          const response = await helpHttp.get(endpoint)
          set({ config: { ...response } })
        } catch (err) {
          set({ error: 'Error getting config' })
        } finally {
          set({ loading: false })
        }
      },
      handleChange: (form) => (event) => {
        const config = get().config
        const fields = Object.fromEntries(new FormData(form.current))

        if (event.target.name === 'currency') { fields.currency = event.target.value }


        set({ isActive: JSON.stringify(config) === JSON.stringify(fields) })
      }
    })
  )
)
