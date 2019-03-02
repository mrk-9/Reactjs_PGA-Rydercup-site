import { validateName, validateEmail } from './validation'

export const HospitalityData = [
  {
    name: 'FIRSTNAME',
    placeholder: 'First Name',
    className: 'form-control',
    id: 'mce-FIRSTNAME',
    validate: validateName
  },
  {
    name: 'LASTNAME',
    placeholder: 'Last Name',
    className: 'form-control',
    id: 'mce-LASTNAME',
    validate: validateName
  },
  {
    name: 'COMPANY',
    placeholder: 'Company Name',
    className: 'form-control',
    id: 'mce-COMPANY',
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
