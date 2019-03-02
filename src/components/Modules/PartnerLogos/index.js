import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

const PartnerLogos = ({ heading, icons }) => (
  <section className='section-sm logos'>
    <Container>
      <Row className='justify-content-center'>
        <Col lg='7'>
          <div className='title text-center mb-5'>
            <p className='text-uppercase text-muted mb-2 subtitle'>{heading}</p>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col lg='6'>
          <Row className='d-flex align-items-center h-100'>
            {icons.map(item => (
              <Col xs='4' key={item.iconImage.file.url}>
                <Img
                  sizes={item.iconImage.sizes}
                  alt='logo-img'
                  className='img-fluid'
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
)

export default PartnerLogos
