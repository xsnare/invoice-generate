import { Button, Grid } from '@mui/material'
import { useInvoice } from '../hooks/useInvoice'

export default function InvoiceActions () {
  const { addNewRow } = useInvoice()
  return (
    <Grid container mt={2} gap={2}>
      <Grid item xs={12} sm={3} >
        <Button
          variant='outlined'
          fullWidth color='success'
          onClick={addNewRow}
        >
          + Add row
        </Button>
      </Grid>
      <Grid item xs={12} sm={3} >
        <Button variant='contained' fullWidth>Save</Button>
      </Grid>
    </Grid>
  )
}
