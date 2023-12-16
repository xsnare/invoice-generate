
import ClearIcon from '@mui/icons-material/Clear'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip
} from '@mui/material'
import { Input } from '../components/UI/Input'
import { numberFormatter } from '../helpers/convertToPlainCurrencyFormat'
import { useInvoice } from '../hooks/useInvoice'

const styleDelete = {
  display: {
    xs: 'none',
    sm: 'flex'
  },
  backgroundColor: 'rgba(198, 23, 36 ,0.1)'
}
const styleSections = {
  display: 'flex',
  justifyContent: { xs: 'end', sm: 'center' },
  order: { xs: -1, sm: 3 },
  padding: '0'
}

export default function InvoiceDetail () {
  const { details, deleteRow, handleChange } = useInvoice()

  return (
    <>
      {details.map(({ id, description, rate, quantity }, index) => (
      <Stack key={id}>
        <Grid container mt={2} sx={{ gap: { xs: 1, sm: 0 } }} spacing={1}>
          <Tooltip title={description} >
            <Grid item xs={12} sm={4}>
              <Input
                label='Description'
                value={description}
                onChange={handleChange(index)}
                />
            </Grid>
          </Tooltip>
          <Grid item xs={12} sm={2.25}>
            <Input
              label='Rate'
              prop='start, $'
              type='number'
              value={rate}
              onChange={handleChange(index)}
            />
          </Grid>
          <Grid item xs={12} sm={2.25}>
            <Input
              label='Quantity'
              type='number'
              value={quantity}
              onChange={handleChange(index)}
            />
          </Grid>
          <Tooltip title={numberFormatter(rate * quantity)} >
            <Grid item xs={12} sm={2.5} >
            <TextField
              id={id}
              label="Amount"
              size='small'
              fullWidth
              value={numberFormatter(rate * quantity)}
              onChange={handleChange(index)}
              InputProps={{
                readOnly: true
              }}
            />
            </Grid>
          </Tooltip>

          <Grid item xs={12} sm={1} sx={styleSections}>

            <IconButton
              color='error' sx={styleDelete}
              onClick={() => deleteRow(id)}>
              <DeleteIcon/>
            </IconButton>

            <IconButton
              sx={{ display: { xs: 'flex', sm: 'none' } }}
              onClick={() => deleteRow(id)}>
              <ClearIcon/>
            </IconButton>

          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }}/>
      </Stack>
      ))}
    </>
  )
}

