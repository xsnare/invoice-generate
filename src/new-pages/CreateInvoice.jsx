
import DeleteIcon from '@mui/icons-material/Delete'
import { Button, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import { Info } from '../components/UI/Info'
import { Input } from '../components/UI/Input'
import ClearIcon from '@mui/icons-material/Clear'
import { useInvoice } from '../hooks/useInvoice'
import { numberFormatter } from '../helpers/convertToPlainCurrencyFormat'


const styleDelete = { display: { xs: 'none', sm: 'flex' }, backgroundColor: 'rgba(198, 23, 36 ,0.1)' }
const styleSections = {
  display: 'flex',
  justifyContent: { xs: 'end', sm: 'center' },
  order: { xs: -1, sm: 3 }
}

export default function CreateInvoice () {
  const { details, addNewRow, deleteRow, handleChange } = useInvoice()

  return (
    <>
    <Stack>
      <Stack component={'header'}>
        <Info title='Create Invoice'>
          To complete the <strong>invoice page</strong>, enter customer details and product/service information. You can add additional rows to the details if needed. If you require assistance, please contact our support team.
        </Info>
      </Stack>
      {details.map(({ id, description, rate, quantity }, index) => (
        <div key={id}>
          <Grid container spacing={1} mt={2}>
            <Grid item xs={12} sm={4}>
              <Input
                label='Description'
                value={description}
                onChange={handleChange(index)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Input
                label='Rate'
                type='number'
                value={rate}
                onChange={handleChange(index)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Input
                label='Quantity'
                type='number'
                value={quantity}
                onChange={handleChange(index)}
              />
            </Grid>
            <Grid item xs={12} sm={3} >
            <TextField
              id="amount"
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

            <Grid item xs={12} sm={1} sx={styleSections} >
              <IconButton color='error' sx={styleDelete} onClick={() => deleteRow(id)}>
                <DeleteIcon/>
              </IconButton>
              <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={() => deleteRow(id)}>
                  <ClearIcon/>
              </IconButton>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2 }}/>

        </div>
      ))}
      <Grid container mt={2}>
        <Grid item xs={12} sm={3}>
          <Button
            variant='text'
            fullWidth color='success'
            onClick={addNewRow}
          >
            + Add row
          </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant='contained' fullWidth>Save</Button>
        </Grid>
      </Grid>

    </Stack>
    </>
  )
}
