import styled from 'styled-components'
import { theme } from '../../../theme'
import { Input } from 'reactstrap'

export const ErrorMessage = styled.div`
  color: ${theme.colors.primary};
  margin: 10px auto;
  > a {
    color: #919496;
    &:hover {
      color: #919496;
    }
  }
`

export const SuccessMessage = styled.div`
  margin-top: 20px;
  > h6 {
    color: ${theme.colors.darkgray};
    > p {
      color: ${theme.colors.gray};
    }
  }
`

export const InputLabel = styled.label`
  margin-top: 10px;
`

export const InputField = styled.input`
  width: 100%;
  margin: 10px auto;
  font-weight: 400;
  font-size: 1rem;
  background: transparent;
  border: none;
  box-shadow: none;
  outline: 0;
  border-bottom: 1px solid #dfe4e7;
`

export const SubmitButton = styled.input`
  width: 100%;
  background-color: #c81414;
  border: 1px solid #c81414;
  color: #fff;
  font-size: 12px;
  transition: all 0.5s;
  font-weight: 700;
  text-transform: uppercase;
  outline: 0;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 25px;
  border-radius: 50px;
  &:hover {
    background-color: #ef4b4b;
    border: 1px solid #ef4b4b;
    outline: none;
    text-decoration: none;
  }
`
export const RInput = styled(Input)`
  background: transparent;
  border: none;
  box-shadow: none;
  outline: 0;
  border-bottom: 1px solid #dfe4e7;
`
export const CheckBox = styled.div`
  padding: 5px;
  display: block;
  width: 100%;
  text-align: left;
`

export const Dropdown = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: left;
  > select {
    margin-top: 10px;
    outline: 0;
  }
`
