import { numberFormatter } from '../helpers/numberFormatter'
import { useInvoice } from '../hooks/useInvoice'

export default function InvoiceDetail () {
  const { details, deleteRow, handleChange } = useInvoice()

  return <fieldset>
  <legend>Details</legend>
    {details.map(({ id, description, rate, quantity }, index) => (
      <div key={id}>
        <button type='button' onClick={() => deleteRow(id)}>x</button>
        <div>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleChange(index)}
          />
        </div>
        <div>
          <input
            type="number"
            name="quantity"
            placeholder="0"
            value={quantity}
            onChange={handleChange(index)}
          />
        </div>
        <div>
          <input
            type="number"
            name="rate"
            placeholder="0.00"
            value={rate}
            onChange={handleChange(index)}
          />
        </div>
        <p>amount: {numberFormatter(rate * quantity)}</p>
      </div>
    ))}
  </fieldset>
}
