import { Typography, Alert, AlertTitle } from '@mui/material'

const Info = ({ children, title }) => {
  return (
    <>
      <Typography variant='h4' component='h3' fontWeight='500' mb={1}>
        {title}
      </Typography>

      <Alert severity="info">
        <AlertTitle component='h3'>Info</AlertTitle>
        <Typography component='p' sx={{ fontSize: '0.75rem' }} variant='body2'>
          {children}
        </Typography>
      </Alert>
    </>
  )
}

export { Info }
