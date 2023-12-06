import { useEffect } from 'react'
import { useConfigStore } from '../stores/config'

export const useConfig = function () {
  const config = useConfigStore(s => s.config)
  const error = useConfigStore(s => s.error)
  const fetchConfig = useConfigStore(s => s.fetchConfig)
  const isActive = useConfigStore(s => s.isActive)
  const loading = useConfigStore(s => s.loading)
  const updateConfig = useConfigStore(s => s.updateConfig)

  useEffect(() => {
    fetchConfig()
  }, [])

  return {
    config,
    error,
    fetchConfig,
    isActive,
    loading,
    updateConfig
  }
}
