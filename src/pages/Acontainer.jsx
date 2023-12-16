import { styled, Container, Typography, Grid, TextField } from '@mui/material'

export default function Acontainer () {
  return (
    <Container component="section" >
      <Typography variant="h3" component="h1">Invoice</Typography>
      <Grid>
        <TextField size='small'/>
        <TextField id="filled-basic" label="Filled" variant="filled" size='small'/>
      </Grid>
    </Container>
  )
}
