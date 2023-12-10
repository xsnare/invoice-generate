import { Alert, AlertTitle, Button, Divider, FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'

export default function NewConfig () {
  const err = false

  return (
    <>
      <Stack spacing={4}>

        <Stack spacing={1}>
          <Typography variant='h5' component='h3' fontWeight='500'>
            Config
          </Typography>

          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            <Typography sx={{ fontSize: '0.75rem' }} variant='body2'>

              On the <strong>configuration page</strong>, you can customize the platform to your preferences for a unique and personalized experience that meets your needs.
            </Typography>
          </Alert>
        </Stack>

        <Stack component='form' spacing={2}>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <TextField
              fullWidth
              id='company'
              label='Company'
              name='company'
              required
              size='small'
              variant='outlined'
              autoComplete='off'
            />
            <TextField
              fullWidth
              id='owner'
              label='Owner'
              name='owner'
              required
              size='small'
              variant='outlined'
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <TextField
              fullWidth
              id='email'
              label='Email'
              name='email'
              size='small'
              type='email'
              variant='outlined'
            />
            <TextField
              fullWidth
              id='phone'
              label='Phone'
              name='phone'
              size='small'
              type='tel'
              variant='outlined'
            />
          </Stack>

          <TextField
            fullWidth
            id='address'
            label='Address'
            name='address'
            required
            size='small'
            variant='outlined'
            helperText={ err ? 'This field has not the correct format' : '' }
            error={err}
          />

          <Divider />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>

            <FormControl size="small" fullWidth>
              <InputLabel id="currency">Currency</InputLabel>
              <Select
                labelId="currency"
                id="currency"
                name='currency'
                defaultValue=''
                label="Currency"
              >
                <MenuItem value=''>None</MenuItem>
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>GBP</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Number"
              id="number"
              name='number'
              size='small'
              fullWidth
              InputProps={{
                endAdornment:
                <InputAdornment position='start'>%</InputAdornment>
              }}
            />
          </Stack>

          <Stack direction='row'>
            <Button variant='contained'>Save</Button>
          </Stack>

        </Stack>
      </Stack>
    </>
  )
}
