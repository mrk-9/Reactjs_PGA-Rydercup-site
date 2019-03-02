import { Field, Formik } from 'formik'
import { propOr } from 'ramda'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { theme } from '../../../theme'
import { LeadsData } from './data'

export const Error = styled.div`
  color: ${theme.colors.primary};
`

export const InputField = styled(Field)`
  background: transparent;
  border: none;
  box-shadow: none;
  outline: 0;
  border-bottom: 1px solid #dfe4e7;
`

export const SubmitButton = styled.input`
  background-color: #c81414;
  border: 1px solid #c81414;
  color: #fff;
  font-size: 12px;
  transition: all 0.5s;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 25px;
  border-radius: 50px;
  &:hover {
    background-color: #ef4b4b;
    border: 1px solid #ef4b4b;
    outline: none;
    text-decoration: none;
  }
`

const LeadsForm = props => {
  const FormUrl = `https://pga.us19.list-manage.com/subscribe/post?u=b0840e9cd22a37b8b9c49e947&amp;id=ea772398be`
  const mailchimpGroupLabel = propOr(null, ['mailchimpLabel'], props)
  const mailchimpGroupName = propOr(null, ['mailchimpName'], props)
  const mailchimpGroupId = propOr(null, ['mailchimpId'], props)

  return (
    <div>
      <Helmet>
        <link
          href='//cdn-images.mailchimp.com/embedcode/classic-10_7.css'
          rel='stylesheet'
          type='text/css'
        />
      </Helmet>

      <Formik
        initialValues={{
          FNAME: '',
          LNAME: '',
          EMAIL: ''
        }}
        render={({ errors, touched, isValidating }) => (
          <form action={FormUrl} method={`post`} id='contact-form'>
            <div id='mc_embed_signup_scroll'>
              {LeadsData.map((field, index) => (
                <div key={index} className='form-group mb-4'>
                  <InputField
                    name={field.name}
                    placeholder={field.placeholder}
                    className={field.className}
                    id={field.id}
                    validate={field.validate}
                  />
                  {errors[field.name] && touched[field.name] && (
                    <Error>{errors[field.name]}</Error>
                  )}
                </div>
              ))}
              {mailchimpGroupName && mailchimpGroupId && (
                <ul style={{ display: 'none' }}>
                  <li>
                    <input
                      type='checkbox'
                      value='1'
                      name={mailchimpGroupName}
                      id={mailchimpGroupId}
                      checked
                    />
                    <label for={mailchimpGroupId}>{mailchimpGroupLabel}</label>
                  </li>
                </ul>
              )}
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
                value='Sign Up for Email'
                className='btn btn-primary btn-block mt-2'
                type='submit'
                id='submit'
                disabled={
                  Object.keys(touched).length === 0 ||
                  Object.keys(errors).length > 0
                }
              />
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default LeadsForm
