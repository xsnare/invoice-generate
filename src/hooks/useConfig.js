import { useRef } from 'react'
import { useConfigStore } from '../stores/config'

export const useConfig = function () {
  const form = useRef()
  const config = useConfigStore(s => s.config)
  const error = useConfigStore(s => s.error)
  const isActive = useConfigStore(s => s.isActive)
  const loading = useConfigStore(s => s.loading)
  const errorMessage = useConfigStore(s => s.errorMessage)

  const { updateConfig, handleChange, fetchConfig } = useConfigStore()

  return {
    config,
    error,
    errorMessage,
    fetchConfig,
    form,
    isActive,
    loading,
    updateConfig,
    handleChange
  }
}
