import { useConfig } from '../hooks/useConfig'

const locale = {
  DOP: 'en-DO',
  USD: 'en-US',
  EUR: 'en-EU'
}

export default function ConfigNumber ({ form }) {
  const { config, handleChange } = useConfig()
  const { currency, number, taxes } = config

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
          defaultValue={number}
          onChange={handleChange(form)}
        />
      </div>
      <div>
        <label htmlFor="taxes">Taxes</label>
        <input
          type="text"
          name="taxes"
          id="taxes"
          placeholder="Taxes"
          defaultValue={taxes}
          onChange={handleChange(form)}
        />
      </div>
        {/* Fix this part */}
        {currency && (
        <div>
          <label htmlFor="currency">Currency</label>
          <select
            name="currency"
            id="currency"
            defaultValue={currency}
            onChange={handleChange(form)}>
            {Object.keys(locale).map(currency => (
              <option
                key={currency}
                value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>)}
    </fieldset>
    </>
  )
}
