import React from 'react'
import Helmet from 'react-helmet'
import { pathOr } from 'ramda'
import { Col, Container, Row } from 'reactstrap'
import Markdown from '../../../Styles/Markdown'
import MailchimpForm from '../../../Forms/Leads/mc'
import Accordion from '../../../Accordion'
import $ from 'jquery'

class Form extends React.Component {
  componentDidMount () {
    /* eslint-disable */

    $(document).on('submit', 'form.mc-form', function(event) {
      event.preventDefault()
      var $form = $(this)
      var emailOptIn = $form.find('input[name="group[2267][2048]"]')
      var guestSelection = $form.find('input[name=GUESTS]').length
        ? $form.find('input[name=GUESTS]')
        : null

      if (emailOptIn.is(':checked')) {
        if (guestSelection === null) {
          $form.find(`#EMAIL-OPTIN-error`).html('')
          $form.find(`#EMAIL-OPTIN-error`).hide()
          subscribe($form)
        } else if (guestSelection.is(':checked')) {
          $form.find(`#EMAIL-OPTIN-error`).html('')
          $form.find(`#EMAIL-OPTIN-error`).hide()
          $form.find(`#GUEST-SELECTION-error`).html('')
          $form.find(`#GUEST-SELECTION-error`).hide()
          subscribe($form)
        } else {
          $form.find(`#EMAIL-OPTIN-error`).html('')
          $form.find(`#EMAIL-OPTIN-error`).hide()
          $form.find(`#GUEST-SELECTION-error`).show()
          $form
            .find(`#GUEST-SELECTION-error`)
            .html(
              'Please indicate how many guests you are interested in entertaining'
            )
        }
      } else {
        $form.find(`#EMAIL-OPTIN-error`).show()
        $form
          .find(`#EMAIL-OPTIN-error`)
          .html('Please verify that you would like to receive emails')
      }
    })

    function subscribe($form) {
      var cellPhone = $form[0][6].value.includes('http')
        ? '—'
        : $form[0][6].value
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: `CELLPHONE=${cellPhone}&${$form.serialize()}`,
        cache: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        error: function(err) {
          alert(
            'Could not connect to the registration server. Please try again later.'
          )
        },
        success: function(resp) {
          var fnames = ['EMAIL', 'FNAME', 'LNAME']
          fnames.forEach(name => {
            $(`#${name}-error`).html('')
            $(`#${name}-error`).hide()
          })
          if (resp.result != 'success') {
            var index = -1
            var msg

            var parts = resp.msg.split(' - ', 2)
            if (parts[1] == undefined) {
              msg = resp.msg
            } else {
              var i = parseInt(parts[0])
              if (i.toString() == parts[0]) {
                index = parts[0]
                msg = parts[1]
              } else {
                index = -1
                msg = resp.msg
              }
            }
            if (index == -1) {
              $(`#EMAIL-error`).show()
              $(`#EMAIL-error`).html(msg)
            } else {
              var fieldName = $("input[name*='" + fnames[index] + "']").attr(
                'name'
              )
              $(`#${fieldName}-${resp.result}`).show()
              $(`#${fieldName}-${resp.result}`).html(msg)
            }
          } else {
            $('#form-section').hide()
            $('#success-message').html(`
        <h6>Thank you for your interest.</h6>
<p>Your request has been submitted successfully. If you need to get in touch with us quickly, please <a href="/contact">contact us</a>.</p>
              `)
          }
        }
      })
    }

    /* eslint-enable */
  }

  render () {
    const leftWidthLg = pathOr(6, ['leftWidthLg'], this.props.data)
    const rightWidthLg = pathOr(5, ['rightWidthLg'], this.props.data)
    const textSection = pathOr('', ['textSection'], this.props.data)
    const contactForm = pathOr('', ['contactForm'], this.props.data)

    return (
      <div>
        <Helmet>
          <link
            href='//cdn-images.mailchimp.com/embedcode/classic-10_7.css'
            rel='stylesheet'
            type='text/css'
          />
        </Helmet>
        <section className='section content'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={leftWidthLg}>
                {textSection.map((item, index) => {
                  const displayStyle = pathOr('', ['displayStyle'], item)
                  switch (displayStyle) {
                    case 'Standard':
                      return (
                        <div key={index}>
                          {item.heading && <h3>{item.heading}</h3>}
                          {item.subheading && <h6>{item.subheading}</h6>}
                          {item.sectionText && (
                            <Markdown
                              value={item.sectionText.internal.content}
                            />
                          )}
                        </div>
                      )
                    case 'Accordion':
                      return (
                        item.heading &&
                        item.sectionText && (
                          <Accordion
                            heading={item.heading}
                            body={item.sectionText.internal.content}
                          />
                        )
                      )
                    default:
                      return ''
                  }
                })}
              </Col>

              <Col lg={rightWidthLg} className='offset-lg-1'>
                {contactForm && <MailchimpForm form={contactForm} />}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default Form
