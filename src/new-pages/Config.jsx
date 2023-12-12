import { Button, CircularProgress, Stack } from '@mui/material'
import { Info } from '../components/UI/Info'
import { Input } from '../components/UI/Input'
import { useConfig } from '../hooks/useConfig'

const locale = {
  DOP: 'en-DO',
  USD: 'en-US',
  EUR: 'en-EU'
}

export default function Config () {
  const { config, handleChange, loading, isActive, errorMessage: err, updateConfig, form } = useConfig()
  const { company, owner, email, currency, address, phone, taxes } = config

  return (
    <Stack spacing={4} component='form' ref={form} onSubmit={updateConfig}>

      <Stack component={'header'} spacing={2}>
        <Info title='Config'>
          On the <strong>configuration page</strong>, you can customize the platform to your preferences for a unique and personalized experience that meets your needs.
        </Info>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Input
          label='Company'
          defaultValue={company}
          onChange={handleChange(form)}
          err={err?.company}
        />
        <Input
          label='Owner'
          defaultValue={owner}
          onChange={handleChange(form)}
          err={err?.owner}
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <Input
          label='Email'
          defaultValue={email}
          onChange={handleChange(form)}
          err={err?.email}
        />
        <Input
          type='tel'
          label='Phone'
          defaultValue={phone}
          onChange={handleChange(form)}
          err={err?.phone}
        />
      </Stack>

      <Input
        label='Address'
        defaultValue={address}
        onChange={handleChange(form)}
      />

      <Stack direction='row' spacing={1}>
        <Input
          type='number'
          prop='end, %'
          label='Taxes'
          defaultValue={taxes}
          onChange={handleChange(form)}
          err={err?.taxes}
        />
        <Input
          select
          data={Object.keys(locale)}
          label='Currency'
          defaultValue={currency}
          onChange={handleChange(form)}
        />
      </Stack>

      <Stack direction='row'>
        <Button type="submit" variant="contained" disabled={isActive}>
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Save'}
        </Button>
      </Stack>
    </Stack>
  )
}
