import { useConfig } from '../hooks/useConfig'
import ConfigCompany from '../components/ConfigCompany'
import ConfigNumber from '../components/ConfigNumber'

export default function Config () {
  const { updateConfig, loading, isActive } = useConfig()

  return (
    <form onSubmit={updateConfig}>
      <ConfigCompany/>
      <ConfigNumber/>
      <button type='submit' disabled={isActive}>{loading ? <div className="spinner"></div> : 'Save'}</button>
    </form>
  )
}
