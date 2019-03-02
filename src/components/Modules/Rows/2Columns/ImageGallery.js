import Img from 'gatsby-image'
import { pathOr } from 'ramda'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Markdown from '../../../Styles/Markdown'
import { OutlineLink, PrimaryLink } from '../../../Styles/Links'
import Helmet from 'react-helmet'
import MailchimpForm from '../../../Forms/Leads/mc'
import $ from 'jquery'

class ImageGallery extends React.Component {
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
    const contactForm = pathOr('', ['contactForm'], this.props.data)
    const provider = pathOr('', ['contactForm', 'provider'], this.props.data)
    const submitButton = pathOr('', ['submitButton'], this.props.data)
    const textContent = pathOr(
      '',
      ['textSection', '0', 'sectionText', 'internal', 'content'],
      this.props.data
    )
    const textHeading = pathOr(
      '',
      ['textSection', '0', 'heading'],
      this.props.data
    )
    const textSubheading = pathOr(
      '',
      ['textSection', '0', 'subheading'],
      this.props.data
    )
    const iconGallery = pathOr([], ['iconGallery'], this.props.data)
    const icons = pathOr([], ['iconGallery', 'icons'], this.props.data)
    const imageGallery = pathOr([], ['imageGallery', '0'], this.props.data)
    const locationInfo = pathOr([], ['locationInfo'], this.props.data)

    return (
      <div>
        <Helmet>
          <link
            href='//cdn-images.mailchimp.com/embedcode/classic-10_7.css'
            rel='stylesheet'
            type='text/css'
          />
          <meta http-equiv='content-type' content='text/html' charset='UTF-8' />
        </Helmet>
        <section className='section content' id='suites'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={leftWidthLg}>
                <div className='title mb-5'>
                  {textHeading && <h3>{textHeading}</h3>}
                  {textSubheading && (
                    <div className='text-highlight text-uppercase mb-4 text-sm'>
                      {textSubheading}
                    </div>
                  )}
                  {textContent && <Markdown value={textContent} />}

                  {iconGallery && (
                    <div className='row text-center'>
                      {icons.map(item => {
                        return (
                          <div
                            key={item.iconText}
                            className='col-6 col-md-3 icon-grid'
                          >
                            <img src={item.iconImage.file.url} alt='' />{' '}
                            <p>{item.iconText}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  {locationInfo
                    ? locationInfo.map(item => {
                      return (
                        <div key={item.heading}>
                          <h5 className='mt-5'>{item.heading}</h5>
                          <img
                            alt=''
                            src={item.locationImage.file.url}
                            className='img-fluid rounded'
                          />
                          {item.mapLinkFineprint && (
                            <p className='mt-3 text-sm'>
                              {item.mapLinkFineprint.mapLinkFineprint}
                            </p>
                          )}

                          {item.mapLink && (
                            <OutlineLink target='_blank' href={item.mapLink}>
                                View hospitality location map
                            </OutlineLink>
                          )}
                        </div>
                      )
                    })
                    : null}
                  {contactForm && provider === 'Mailchimp' && (
                    <MailchimpForm form={contactForm} />
                  )}
                  {contactForm && provider === 'Salesforce' && (
                    <MailchimpForm form={contactForm} />
                  )}
                  {submitButton && (
                    <Row className='mt-4'>
                      <Col md='8'>
                        <PrimaryLink
                          as='a'
                          rel='noopener noreferrer'
                          href={submitButton.locationUrl}
                          target='_blank'
                          className='mt-2'
                        >
                          {submitButton.text}
                        </PrimaryLink>
                      </Col>
                    </Row>
                  )}
                </div>
              </Col>
              <Col lg={rightWidthLg} className='offset-lg-1'>
                <div className='row mt-2 mb-4'>
                  {imageGallery && (
                    <div className='col-6'>
                      <Img
                        className='img-fluid rounded mb-4'
                        fluid={imageGallery.images[0].fluid}
                        alt=''
                      />
                      <Img
                        className='img-fluid rounded mb-2'
                        fluid={imageGallery.images[1].fluid}
                        alt=''
                      />
                    </div>
                  )}
                  {imageGallery && (
                    <div className='col-6'>
                      <Img
                        className='img-fluid rounded mb-2'
                        fluid={imageGallery.images[2].fluid}
                        alt=''
                      />
                    </div>
                  )}
                </div>
                {imageGallery && (
                  <Img
                    className='img-fluid rounded mb-4'
                    fluid={imageGallery.images[3].fluid}
                    alt=''
                  />
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default ImageGallery
