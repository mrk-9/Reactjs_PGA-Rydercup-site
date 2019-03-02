import Img from 'gatsby-image'
import React from 'react'
import { Element } from 'react-scroll'
import { Col, Container, Row } from 'reactstrap'
import { PrimaryLink } from '../../Styles/Links'
import Markdown from '../../Styles/Markdown'

const ContentBlockImgRight = ({
  event,
  heading,
  subheading,
  callToAction,
  imageRight,
  imageRightDescription,
  sectionText
}) => (
  <Element name='about' className='element'>
    <section className='section-nb' id='about'>
      <Container>
        <Row className='mt-4 d-flex'>
          <Col lg='6' className='mb-4'>
            <h3>{heading}</h3>
            <p className='lead'>{subheading}</p>
            <Markdown value={sectionText.internal.content} />
            <p className='mt-4'>
              <PrimaryLink
                to={`${event.year}/tickets`}
                className='btn btn-primary'
              >
                {callToAction}
              </PrimaryLink>
            </p>
          </Col>
          <Col lg='6' className='text-center'>
            <Img
              className='img-fluid img-btm'
              sizes={imageRight.sizes}
              alt={imageRightDescription}
            />
          </Col>
        </Row>
      </Container>
    </section>
  </Element>
)

export default ContentBlockImgRight
