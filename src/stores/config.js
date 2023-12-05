import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { configService } from '../services/configService'

const initialState = {
  company: '',
  owner: '',
  number: ''
}

export const useConfigStore = create(
  devtools(
    set => ({
      config: initialState,
      loadingConfig: false,
      errorConfig: null,
      updateConfig: async (e) => {
        e.preventDefault()
        const fields = Object.fromEntries(new FormData(e.target))
        set({ loadingConfig: true, errorConfig: null })

        try {
          const response = await configService.updateConfig(fields)
          set({ config: { ...response } })
        } catch (error) {
          set({ errorConfig: 'Error al actualizar la configuración.' })
        } finally {
          set({ loadingConfig: false })
        }
      },
      fetchConfig: async () => {
        set({ loadingConfig: true, errorConfig: null })
        try {
          const response = await configService.getConfig()
          set({ config: { ...response } })
        } catch (error) {
          set({ errorConfig: 'Error al actualizar la configuración.' })
        } finally {
          set({ loadingConfig: false })
        }
      }
    })
  )
)
