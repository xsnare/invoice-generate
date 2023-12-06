import { useConfig } from '../hooks/useConfig'
import { useConfigStore } from '../stores/config'

export default function ConfigCompany () {
  const { config } = useConfig()
  const { company, owner } = config

  const handleChange = useConfigStore(s => s.handleChange)

  return (
    <fieldset>
        <legend>Company Info</legend>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            defaultValue={company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="owner">Owner</label>
          <input
            type="text"
            name="owner"
            id="owner"
            placeholder="Owner"
            defaultValue={owner}
            onChange={handleChange}
          />
        </div>
      </fieldset>
  )
}
