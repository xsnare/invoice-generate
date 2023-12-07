import { useConfig } from '../hooks/useConfig'

const locale = {
  DOP: 'en-DO',
  USD: 'en-US',
  EUR: 'en-EU'
}

export default function ConfigNumber ({ form }) {
  const { config, handleChange, isLoading } = useConfig()
  const { currency } = config

  return (
    <>
    <fieldset>
      <legend>Invoice Number</legend>
      <div>
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          id="number"
          placeholder="Number"
        />
      </div>
      <div>
        <label htmlFor="taxes">Taxes</label>
        <input
          type="text"
          name="taxes"
          id="taxes"
          placeholder="Taxes"
        />
      </div>
        <div>
          <label htmlFor="currency">Currency</label>
          <select
            name="currency"
            id="currency"
            defaultValue={!isLoading ? currency : ''}
            onChange={handleChange(form)}>
            {Object.keys(locale).map(currency => (
              <option
                key={currency}
                value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
    </fieldset>
    </>
  )
}
