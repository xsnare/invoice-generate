import { InputAdornment, MenuItem, TextField } from '@mui/material'

const Input = function ({ label, value, onChange, data, prop, err, ...rest }) {
  const lb = label.toLowerCase()

  const defaultProps = {
    size: 'small',
    variant: 'outlined',
    autoComplete: 'off'
  }

  const symbol = prop?.split(',')[1]
  let adorn = {}

  if (prop?.split(',')[0] === 'start') {
    adorn = {
      startAdornment:
      <InputAdornment position='start'>{symbol}</InputAdornment>
    }
  } else {
    adorn = {
      endAdornment:
      <InputAdornment position='start'>{symbol}</InputAdornment>
    }
  }

  if (err) {
    defaultProps.error = true
    defaultProps.helperText = err
  }

  return (
    <>
      <TextField

        fullWidth
        {...rest}
        {...defaultProps}
        id={lb}
        label={label}
        name={lb}
        onChange={onChange}
        InputProps={prop && adorn}

      >
      {data && data.map((item, index) => (
        <MenuItem key={index} value={item}>{item}</MenuItem>
      ))}
      </TextField>
    </>
  )
}

export { Input }
