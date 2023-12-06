import { useEffect } from 'react'
import { useConfigStore } from '../../../stores/config'

import { useShallow } from 'zustand/react/shallow'

export const useConfig = function () {
  const updateConfig = useConfigStore(useShallow(s => s.updateConfig))
  const fetchConfig = useConfigStore(s => s.fetchConfig)

  const config = useConfigStore(s => s.config)
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
