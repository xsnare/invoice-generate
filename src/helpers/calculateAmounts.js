export const calculateAmounts = (data) => {
  const temp = data.reduce((acc, item) => {
    return acc + ((item.rate) * (item.quantity))
  }, 0)

  const taxes = temp * 0.18
  const total = temp + taxes

  return {
    subTotal: temp,
    taxes,
    total
  }
}
