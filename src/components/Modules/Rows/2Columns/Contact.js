import { Formik } from 'formik'
import { pathOr } from 'ramda'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Error, InputField, SubmitButton } from '../../../Forms/Leads'
import { validateName, validateEmail } from '../../../Forms/Leads/validation'
import { v1 as uuidv1 } from 'uuid'
import { RInput } from '../../../Styles/Forms'
import Markdown from '../../../Styles/Markdown'
import { ExternalLink } from '../../../Styles/Links'
import styled from 'styled-components'

const LeadsData = [
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

const ContactCard = styled(Row)`
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 30px 0;

  img {
    width: 68px;
  }

  h6 {
    margin: 0;
  }
`

const Contact = ({ data }) => {
  const leftWidthLg = pathOr(6, ['leftWidthLg'], data)
  const rightWidthLg = pathOr(5, ['rightWidthLg'], data)
  const contactForm = pathOr('', ['contactForm'], data)
  const textContent = pathOr(
    '',
    ['textSection', '0', 'sectionText', 'internal', 'content'],
    data
  )
  const contactHeading = pathOr('', ['textSectionRight', '0', 'heading'], data)
  const contactCards = pathOr([], ['contactCards'], data)
  const FormUrl = `https://formspree.io/mkvganpx`

  return (
    <div>
      <section className='section content'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={leftWidthLg}>
              <h3>{contactForm.heading}</h3>

              <div className='form-wrapper'>
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
                        <div className='form-group mb-4'>
                          <InputField
                            name='MESSAGE'
                            className='form-control'
                            validate={validateName}
                            render={({ field }) => (
                              <RInput
                                type='textarea'
                                {...field}
                                placeholder='Enter your message...'
                              />
                            )}
                          />
                        </div>
                        <input
                          type='hidden'
                          name='_next'
                          value='https://attend.rydercup.com/thankyou/'
                        />
                        <div className='clear' />
                        <SubmitButton
                          value='Send Message'
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

                <p className='text-sm mt-4'>
                  By providing your email address, you agree to receive
                  communications from the PGA of America and their partners. For
                  information on how we protect your privacy, please read our{' '}
                  <ExternalLink
                    href='https://www.pga.org/privacy-policy'
                    target='_blank'
                  >
                    Privacy Policy
                  </ExternalLink>
                  .
                </p>
              </div>

              {textContent && <Markdown className='mt-5' value={textContent} />}
            </Col>

            <Col lg={rightWidthLg} className='offset-lg-1'>
              <Row>
                <Col xs='12'>
                  <h5>{contactHeading}</h5>
                </Col>
              </Row>
              {contactCards.map(item => (
                <ContactCard key={uuidv1()}>
                  <Col xs='12'>
                    <table>
                      <tbody>
                        <tr>
                          <td valign='top'>
                            <img
                              alt=''
                              src={item.avatar.file.url}
                              className='mr-3'
                            />
                          </td>
                          <td>
                            <h6>{item.heading}</h6>
                            <span className='text-sm text-muted'>
                              {item.subheading}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </ContactCard>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Contact
