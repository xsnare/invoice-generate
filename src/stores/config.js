import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { helpHttp } from '../helpers/helpHttp'

const initialState = {
  company: '',
  owner: '',
  number: '',
  taxes: '',
  currency: 'DOP'
}

const endpoint = 'config'

export const useConfigStore = create(
  devtools(
    (set, get) => ({
      config: initialState,
      error: null,
      isActive: true,
      loading: false,

      // Actions
      updateConfig: async (e) => {
        e.preventDefault()
        const isActive = get().isActive
        const fields = Object.fromEntries(new FormData(e.target))

        if (isActive) return
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
      handleChange: (form) => (e) => {
        const fields = Object.fromEntries(new FormData(form.current))
        const config = get().config
        set({ isActive: JSON.stringify(config) === JSON.stringify(fields) })
      }
    })
  )
)
