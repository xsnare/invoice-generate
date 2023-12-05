import { useEffect } from 'react'
import { useConfigStore } from '../stores/config'

export const useConfig = function () {
  const config = useConfigStore(s => s.config)

  const updateConfig = useConfigStore(s => s.updateConfig)
  const fetchConfig = useConfigStore(s => s.fetchConfig)

  const loading = useConfigStore(s => s.loadingConfig)
  const error = useConfigStore(s => s.errorConfig)

  useEffect(() => {
    fetchConfig()
  }, [])

  return {
    config,
    loading,
    error,
    updateConfig,
    fetchConfig
  }
}
