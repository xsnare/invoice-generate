export const validateForm = (form) => {
  const { company, owner, adrress, taxes, phone, email } = form
  let err = false
  const message = {}

  if (!company.trim()) {
    err = true
    message.company = 'Company name is required'
  } else if (company.length < 3) {
    err = true
    message.company = 'Company name must be at least 3 characters'
  } else if (company.length > 35) {
    err = true
    message.company = 'Company name must be less than 35 characters'
  }

  if (!owner.trim()) {
    err = true
    message.owner = 'Owner name is required'
  } else if (owner.length < 3) {
    err = true
    message.owner = 'Owner name must be at least 3 characters'
  } else if (owner.length > 35) {
    err = true
    message.owner = 'Owner name must be less than 35 characters'
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    err = true
    message.email = 'Invalid email format. Please check your email address'
  } else if (email.length > 35) {
    err = true
    message.email = 'Email must be less than 35 characters'
  }

  if (!Number(phone)) {
    err = true
    message.phone = 'Phone number must be a number'
  } else if (phone.length !== 10) {
    err = true
    message.phone = 'Phone number must be 10 characters'
  }


  if (!/^\d+$/g.test(taxes)) {
    err = true
    message.taxes = 'Taxes must be a number'
  } else if (taxes < 0 || taxes > 100) {
    err = true
    message.taxes = 'Taxes must be between 0 and 100'
  }

  return err ? message : null
}
