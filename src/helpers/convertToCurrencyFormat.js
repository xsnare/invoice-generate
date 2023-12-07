
export const convertToCurrencyFormat = (value, locale, currency) => {
  let formattedAmounts = {}

  for (const key in value) {
    formattedAmounts = {
      ...formattedAmounts,
      [key]: new Intl.NumberFormat(locale[currency], {
        style: 'currency',
        currency
      }).format(value[key])
    }
  }

  return formattedAmounts
}
