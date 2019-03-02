import { validateName, validateEmail } from './validation'

export const LeadsData = [
  {
    name: 'FNAME',
    placeholder: 'First Name',
    className: 'form-control',
    id: 'mce-FIRSTNAME',
    validate: validateName
  },
  {
    name: 'LNAME',
    placeholder: 'Last Name',
    className: 'form-control',
    id: 'mce-LASTNAME',
    validate: validateName
  },
  {
    name: 'EMAIL',
    placeholder: 'Email',
    className: 'form-control',
    id: 'mce-EMAIL',
    validate: validateEmail
  }
]
