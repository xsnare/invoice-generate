export default function ConfigNumber () {
  return (
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
    </fieldset>
  )
}
