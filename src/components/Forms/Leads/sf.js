import React from 'react'
import { pathOr } from 'ramda'
import {
  InputField,
  SubmitButton,
  CheckBox,
  InputLabel,
  Dropdown
} from '../../Styles/Forms'
import { ExternalLink } from '../../Styles/Links'

const SalesforceForm = ({ form }) => {
  const heading = pathOr('', ['heading'], form)
  const subheading = pathOr('', ['subheading'], form)
  const callToAction = pathOr('', ['callToAction'], form)
  const siteUrl = pathOr(
    '',
    ['row___2_columns', '0', 'page', '0', 'event', '0', 'siteUrl'],
    form
  )
  const slug = pathOr('', ['row___2_columns', '0', 'page', '0', 'slug'], form)
  const sourceUrl = `${siteUrl}/${slug}`

  return (
    <>
      <div id='form-section'>
        <h5 className='mt-5'>{heading}</h5>
        <p className='text-sm'>{subheading}</p>
        <div className='form-wrapper'>
          <form
            action='https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
            method='POST'
          >
            <input type='hidden' name='oid' value='00D1U000000wYTd' />
            <input
              type='hidden'
              name='retURL'
              value='http://attend.rydercup.com/thankyou'
            />
            <InputLabel htmlFor='company'>Company</InputLabel>
            <InputField
              id='company'
              maxLength='40'
              name='company'
              size='20'
              type='text'
            />

            <InputLabel htmlFor='first_name'>First Name</InputLabel>
            <InputField
              id='first_name'
              maxLength='40'
              name='first_name'
              size='20'
              type='text'
              required
            />

            <InputLabel htmlFor='last_name'>Last Name</InputLabel>
            <InputField
              id='last_name'
              maxLength='80'
              name='last_name'
              size='20'
              type='text'
              required
            />

            <InputLabel htmlFor='email'>Email</InputLabel>
            <InputField
              id='email'
              maxLength='80'
              name='email'
              size='20'
              type='text'
              required
            />
            <CheckBox>
              <input
                id='00N1U00000ILihQ'
                name='00N1U00000ILihQ'
                type='checkbox'
                value='1'
                required
              />{' '}
              You may contact me by email
            </CheckBox>

            <InputLabel htmlFor='phone'>Phone</InputLabel>
            <InputField
              id='phone'
              maxLength='40'
              name='phone'
              size='20'
              type='text'
            />
            <CheckBox>
              <input
                id='00N1U00000ILihR'
                name='00N1U00000ILihR'
                type='checkbox'
                value='1'
              />{' '}
              You may contact me by phone
            </CheckBox>
            <Dropdown>
              <strong>
                How many guests are you interested in entertaining?
              </strong>
              <select
                id='00N1U00000ILihT'
                name='00N1U00000ILihT'
                title='Party Size'
                required
              >
                <option value=''>Select number of guests</option>
                <option value='Less than 10'>Less than 10</option>
                <option value='10 - 30'>10 - 30</option>
                <option value='30 - 50'>30 - 50</option>
                <option value='50 or more'>50 or more</option>
              </select>
            </Dropdown>
            <div style={{ display: 'none' }}>
              <label htmlFor='lead_source'>Lead Source</label>
              <select id='lead_source' name='lead_source'>
                <option value={sourceUrl} selected />
              </select>
            </div>
            <SubmitButton type='submit' value={callToAction} name='submit' />
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
      </div>
    </>
  )
}

export default SalesforceForm
