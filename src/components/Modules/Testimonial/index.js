import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Testimonial = ({ name, occupation, quote: { quote }, photo = '' }) => (
  <section className='bg-light section'>
    <Container>
      <Row className='justify-content-center'>
        <Col lg='8' className='text-center'>
          {photo && (
            <img src={photo.file.url} alt='' height='140px' className='mb-4' />
          )}
          <p className='text-muted'>{quote}</p>
          <h5>{name}</h5>
          <p className='text-muted text-sm'>{occupation}</p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Testimonial
