import React from 'react'
import { pathOr } from 'ramda'
import styled from 'styled-components'
import { ExternalLink } from '../../Styles/Links'
import {
  InputField,
  ErrorMessage,
  SuccessMessage,
  SubmitButton
} from '../../Styles/Forms'
import ReactTelephoneInput from 'react-telephone-input'
import 'react-telephone-input/lib/withStyles'
import flags from './flags.png'

const GuestOption = styled.div`
  margin-top: 15px;
  > ul {
    padding: 0;
    list-style: none;
    display: block;
    > li {
      display: inline;
      padding-right: 15px;
      > input {
        margin-right: 5px;
      }
    }
  }
`

const OptIn = styled.div`
  > ul {
    list-style: none;
    padding: 0;
    > li > input {
      margin-right: 10px;
    }
  }
`

const MailchimpForm = ({ form }) => {
  const heading = pathOr('', ['heading'], form)
  const subheading = pathOr('', ['subheading'], form)
  const submitButton = pathOr('', ['submitButton'], form)
  const callToAction = pathOr('', ['callToAction'], form)
  const groupId = pathOr('', ['mailchimpGroupId'], form)
  const groupName = pathOr('', ['mailchimpGroupName'], form)
  const hospitalityForm = groupId === 'mce-group[2231]-2231-0'
  const siteUrl = pathOr(
    '',
    ['row___2_columns', '0', 'page', '0', 'event', '0', 'siteUrl'],
    form
  )
  const slug = pathOr('', ['row___2_columns', '0', 'page', '0', 'slug'], form)
  const sourceUrl = `${siteUrl}/${slug}`

  const GuestsData = [
    { id: 'mce-GUESTS-0', value: 'Less than 10' },
    { id: 'mce-GUESTS-1', value: '10 - 30' },
    { id: 'mce-GUESTS-2', value: '30 - 50' },
    { id: 'mce-GUESTS-3', value: '50 or more' }
  ]

  return (
    <>
      <div id='form-section'>
        {heading && <h5 className='mt-5'>{heading}</h5>}
        {subheading && <p className='text-sm'>{subheading}</p>}
        <div className='form-wrapper'>
          <form
            action='https://pga.us19.list-manage.com/subscribe/post-json?u=b0840e9cd22a37b8b9c49e947&amp;id=ea772398be&amp;c=?'
            method='get'
            id={groupName}
            className='mc-form'
          >
            {hospitalityForm && (
              <div>
                <label htmlFor='mce-COMPANY'>Company Name </label>
                <InputField type='text' name='COMPANY' id='mce-COMPANY' />
              </div>
            )}
            <div>
              <label htmlFor='mce-FNAME'>First Name</label>
              <InputField type='text' name='FNAME' />
            </div>
            <ErrorMessage id='FNAME-error' />
            <div>
              <label htmlFor='mce-LNAME'>Last Name</label>
              <InputField type='text' name='LNAME' />
            </div>
            <ErrorMessage id='LNAME-error' />
            <div>
              <label htmlFor='mce-EMAIL'>Email Address</label>
              <InputField type='email' name='EMAIL' />
            </div>
            <ErrorMessage id='EMAIL-error' />
            <OptIn>
              <ul>
                <li>
                  <input
                    type='checkbox'
                    value='2048'
                    name='group[2267][2048]'
                    id='mce-group[2267]-2267-0'
                  />
                  <label htmlFor='mce-group[2267]-2267-0'>
                    You may contact me by email
                  </label>
                </li>
              </ul>
              <ErrorMessage id='EMAIL-OPTIN-error' />
            </OptIn>

            {hospitalityForm && (
              <div className='mc-field-group'>
                <label htmlFor='mce-CELLPHONE'>Cell Phone </label>
                <ReactTelephoneInput
                  name='CELLPHONE'
                  id='mce-CELLPHONE'
                  defaultCountry='us'
                  flagsImagePath={flags}
                />

                <OptIn>
                  <ul>
                    <li>
                      <input
                        type='checkbox'
                        value='4096'
                        name='group[2271][4096]'
                        id='mce-group[2271]-2271-0'
                      />
                      <label htmlFor='mce-group[2271]-2271-0'>
                        You may contact me by phone
                      </label>
                    </li>
                  </ul>
                </OptIn>
              </div>
            )}
            {hospitalityForm && (
              <GuestOption className='mc-field-group input-group'>
                <strong>
                  How many guests are you interested in entertaining?
                </strong>
                <ul>
                  {GuestsData.map(item => {
                    return (
                      <li key={item.id}>
                        <input
                          type='radio'
                          value={item.value}
                          name='GUESTS'
                          id={item.id}
                        />
                        <label htmlFor={item.id}>{item.value}</label>
                      </li>
                    )
                  })}
                </ul>
                <ErrorMessage id='GUEST-SELECTION-error' />
              </GuestOption>
            )}
            <SubmitButton type='submit' value={callToAction} name='subscribe' />
            <div
              className='mc-field-group input-group'
              style={{ display: 'none' }}
            >
              <ul>
                <li>
                  <input
                    type='checkbox'
                    value='1'
                    name={groupName}
                    id={groupId}
                    checked
                    readOnly
                  />
                  <label htmlFor={groupId} />
                </li>
              </ul>
              <div style={{ display: 'none' }} className='mc-field-group'>
                <label htmlFor='mce-FORM'>Form Location </label>
                <input
                  type='text'
                  value={sourceUrl}
                  name='FORM'
                  id='mce-FORM'
                />
              </div>
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
                  name='b_b0840e9cd22a37b8b9c49e947_ea772398be'
                  tabIndex='-1'
                  value=''
                  readOnly
                />
              </div>
              <div className='clear'>
                <input
                  type='submit'
                  value='Subscribe'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='button'
                />
              </div>
            </div>
          </form>
          <p className='text-sm mt-4'>
            By providing your email address, you agree to receive communications
            from the PGA of America and their partners. For information on how
            we protect your privacy, please read our{' '}
            <ExternalLink
              href='https://www.pga.org/privacy-policy'
              target='_blank'
            >
              Privacy Policy
            </ExternalLink>
            .
          </p>
        </div>

        {submitButton && (
          <div className='row mt-4'>
            <div className='col-8'>
              <input
                type='submit'
                value='Subscribe'
                id='#submit-button'
                target='_blank'
                className='btn btn-primary btn-block mt-2'
              />
            </div>
          </div>
        )}
      </div>
      <SuccessMessage id='success-message' />
    </>
  )
}

export default MailchimpForm
