import { useConfig } from '../hooks/useConfig'
import ConfigCompany from '../components/ConfigCompany'
import ConfigNumber from '../components/ConfigNumber'
import { useRef } from 'react'


export default function Config () {
  const { updateConfig, loading, isActive } = useConfig()
  const form = useRef()

  return (
    <form ref={form} onSubmit={updateConfig}>
      <ConfigCompany form={form}/>
      <ConfigNumber/>
      <button type='submit' disabled={isActive}>{loading ? <div className="spinner"></div> : 'Save'}</button>
    </form>
  )
}
