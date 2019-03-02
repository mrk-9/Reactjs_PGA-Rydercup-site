export const validateEmail = value => {
  let error
  if (!value) {
    error = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Please enter a valid email address'
  }
  return error
}

export const validateName = value => {
  let error
  if (!value) {
    error = 'This field is required'
  }
  return error
}
