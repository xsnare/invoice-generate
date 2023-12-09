export default function InvoiceHeader () {
  return <fieldset>
  <legend>Invoice</legend>
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        placeholder="Name"
      />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="off"
        placeholder="email@example.com"
      />
    </div>
  </fieldset>
}
