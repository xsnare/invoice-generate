import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { helpHttp } from '../helpers/helpHttp'
import { configService } from '../services/configService'

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
      errorConfig: null,
      isActive: true,
      loadingConfig: false,
      updateConfig: async (e) => {
        e.preventDefault()
        const fields = Object.fromEntries(new FormData(e.target))

        if (get().isActive) return
        set({ loadingConfig: true, errorConfig: null })
        try {
          const response = await configService.updateConfig(fields)
          set({ config: { ...response } })
        } catch (error) {
          set({ errorConfig: 'Error al actualizar la configuración.' })
        } finally {
          set({ loadingConfig: false })
          set({ isActive: true })
        }
      },
      fetchConfig: async () => {
        set({ loadingConfig: true, errorConfig: null })
        try {
          const response = await helpHttp.get(endpoint)
          set({ config: { ...response } })
        } catch (error) {
          set({ errorConfig: 'Error getting config' })
        } finally {
          set({ loadingConfig: false })
        }
      },
      handleChange: ({ target: { parentElement } }) => {
        const form = parentElement.parentElement.parentElement
        const fields = Object.fromEntries(new FormData(form))
        set({ isActive: JSON.stringify(get().config) === JSON.stringify(fields) })
      }
    })
  )
)
