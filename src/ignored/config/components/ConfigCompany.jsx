import { useConfig } from '../hooks/useConfig'

export default function ConfigCompany () {
  const { config } = useConfig()
  const { company, owner } = config

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
          />
        </div>
      </fieldset>
  )
}
