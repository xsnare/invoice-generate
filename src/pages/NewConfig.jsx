import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Divider,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material'

import { useConfig } from '../hooks/useConfig'
import { useRef } from 'react'

const locale = {
  DOP: 'en-DO',
  USD: 'en-US',
  EUR: 'en-EU'
}

export default function NewConfig () {
  const form = useRef()
  const { config, handleChange, loading, updateConfig, isActive } = useConfig()
  const { company, owner, email, currency, address, phone, taxes } = config

  const err = false

  if (!company) return


  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={1} component='header'>
          <Typography variant='h4' component='h3' fontWeight='500'>
            Config
          </Typography>

          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            <Typography sx={{ fontSize: '0.75rem' }} variant='body2'>

              On the <strong>configuration page</strong>, you can customize the platform to your preferences for a unique and personalized experience that meets your needs.
            </Typography>
          </Alert>
        </Stack>

        <Stack component='form' spacing={2} ref={form} onSubmit={updateConfig}>

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
              defaultValue={company}
              onChange={handleChange(form)}
            />
            <TextField
              fullWidth
              id='owner'
              label='Owner'
              name='owner'
              required
              size='small'
              variant='outlined'
              autoComplete='off'
              defaultValue={owner}
              onChange={handleChange(form)}
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
              autoComplete='off'
              defaultValue={email}
              onChange={handleChange(form)}
            />
            <TextField
              fullWidth
              id='phone'
              label='Phone'
              name='phone'
              size='small'
              type='tel'
              variant='outlined'
              autoComplete='off'
              defaultValue={phone}
              onChange={handleChange(form)}
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
            autoComplete='off'
            defaultValue={address}
            onChange={handleChange(form)}
            helperText={ err ? 'This field has not the correct format' : '' }
            error={err}
          />

          <Divider />

          <Stack direction='row' spacing={1}>

            <TextField
              id="currency"
              select
              name='currency'
              label="Currency"
              defaultValue={currency}
              onChange={handleChange(form)}
              size='small'
              fullWidth
            >
              {Object.keys(locale).map((currency) => (
                <MenuItem key={currency} value={currency}>{currency}</MenuItem>
              ))}
            </TextField>

            <TextField
              label="Taxes"
              id="number"
              name='taxes'
              size='small'
              type='number'
              autoComplete='off'
              fullWidth
              defaultValue={taxes}
              onChange={handleChange(form)}
              InputProps={{
                endAdornment:
                <InputAdornment position='start'>%</InputAdornment>
              }}
            />
          </Stack>

          <Stack direction='row'>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isActive}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Save'}
            </Button>
          </Stack>

        </Stack>
      </Stack>
    </>
  )
}
