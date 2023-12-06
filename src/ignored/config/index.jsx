
import ConfigCompany from './components/ConfigCompany'
import ConfigNumber from './components/ConfigNumber'
import { useConfig } from './hooks/useConfig'


export default function Config () {
  const { updateConfig, loading } = useConfig()

  return (
    <form onSubmit={updateConfig}>
      <ConfigCompany/>
      <ConfigNumber/>
      <button type='submit'>{loading ? <div className="spinner"></div> : 'Save'}</button>
    </form>
  )
}
