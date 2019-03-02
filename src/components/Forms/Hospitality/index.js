import React from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { validatePrivacy } from './validation'
import { HospitalityData } from './data'

const HospitalityUrl = `https://pga.us19.list-manage.com/subscribe/post?u=b0840e9cd22a37b8b9c49e947&amp;id=c5ccfc7f73&SIGNUP=Hospitality Page`

const Error = styled.div`
  color: ${theme.colors.primary};
`

const InputField = styled(Field)`
  background: transparent;
  border: none;
  box-shadow: none;
  outline: 0;
  border-bottom: 1px solid #dfe4e7;
`

const SubmitButton = styled.input`
  background: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.white};
  float: right;
  &:disabled {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    opacity: 0.3;
    &:hover {
      transition: all 0s;
    }
  }
`

class HospitalityForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <div>
        <Button className='btn btn-primary' onClick={this.toggle}>
          LEARN MORE
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className='modal-title' toggle={this.toggle}>
            Interest Form
          </ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{
                FIRSTNAME: '',
                LASTNAME: '',
                EMAIL: '',
                COMPANY: '',
                PRIVACY: false
              }}
            >
              {({ errors, touched, isValidating }) => (
                <form action={HospitalityUrl} method={`post`}>
                  {HospitalityData.map((field, index) => (
                    <div key={index} className='form-group mb-4'>
                      <InputField
                        name={field.name}
                        placeholder={field.placeholder}
                        className={field.className}
                        id={field.id}
                        validate={field.validate}
                      />
                      {errors[field.name] &&
                        touched[field.name] && (
                        <Error>{errors[field.name]}</Error>
                      )}
                    </div>
                  ))}
                  <div className='form-check'>
                    <Field
                      type='checkbox'
                      name='PRIVACY'
                      id='mce-PRIVACY-0'
                      className='form-check-input'
                      value='By providing your email address, you agree to receive communications from the PGA and their partners.'
                      validate={validatePrivacy}
                    />
                    <label className='form-check-label' htmlFor='mce-PRIVACY-0'>
                      By providing your email address, you agree to receive
                      communications from the PGA and their partners.
                    </label>
                  </div>
                  {errors.PRIVACY &&
                    touched.PRIVACY && <Error>{errors.PRIVACY}</Error>}
                  <div id='mce-responses' className='clear'>
                    <div
                      className='response'
                      id='mce-error-response'
                      style={{ display: 'none' }}
                    />
                    <div
                      className='response'
                      id='mce-success-response'
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden='true'
                  >
                    <input
                      type='text'
                      name='b_b0840e9cd22a37b8b9c49e947_c5ccfc7f73'
                      tabIndex='-1'
                    />
                  </div>
                  <div className='clear' />
                  <SubmitButton
                    value='send'
                    className='btn'
                    type='submit'
                    id='mc-embedded-subscribe'
                    disabled={
                      Object.keys(touched).length === 0 ||
                      Object.keys(errors).length > 0
                    }
                  />
                </form>
              )}
            </Formik>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default HospitalityForm
