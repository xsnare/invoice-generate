import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { helpHttp } from '../helpers/helpHttp'

const initialState = {
  company: '',
  owner: '',
  number: ''
}

const endpoint = 'config'

export const useConfigStore = create(
  devtools(
    (set, get) => ({
      config: initialState,
      error: null,
      isActive: true,
      loading: false,
      updateConfig: async (e) => {
        e.preventDefault()
        const fields = Object.fromEntries(new FormData(e.target))

        if (get().isActive) return
        set({ loading: true, error: null })
        try {
          const response = await helpHttp.put(endpoint, fields)
          set({ config: { ...response } })
        } catch (err) {
          set({ error: 'Error al actualizar la configuración.' })
        } finally {
          set({ loading: false })
          set({ isActive: true })
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
      handleChange: (form) => () => {
        const fields = Object.fromEntries(new FormData(form.current))
        set({ isActive: JSON.stringify(get().config) === JSON.stringify(fields) })
      }
    })
  )
)
