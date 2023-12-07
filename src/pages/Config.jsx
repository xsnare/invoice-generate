import { useRef } from 'react'
import ConfigCompany from '../components/ConfigCompany'
import ConfigNumber from '../components/ConfigNumber'
import { useConfig } from '../hooks/useConfig'


export default function Config () {
  const { updateConfig, loading, isActive } = useConfig()
  const form = useRef()

  return (
    <form ref={form} onSubmit={updateConfig}>
      <ConfigCompany form={form}/>
      <ConfigNumber form={form}/>
      <button type='submit' disabled={isActive}>{loading ? <div className="spinner"></div> : 'Save'}</button>
    </form>
  )
}
