export const calculateAmounts = (data, taxes, hasTaxes) => {
  const temp = data.reduce((acc, item) => {
    return acc + ((item.rate) * (item.quantity))
  }, 0)

  const tax = !hasTaxes ? 0 : temp * (taxes / 100)
  const total = temp + tax

  return {
    subtotal: temp,
    tax,
    total
  }
}
