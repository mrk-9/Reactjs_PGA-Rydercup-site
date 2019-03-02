import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import styled from 'styled-components'

const CallToAction = styled(Link)`
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
    background-color: #ef4b4b !important;
    border: 1px solid #ef4b4b !important;
    outline: none;
    text-decoration: none;
  }
`

const CardBlock = ({ event, cards, summaryText }) => {
  return (
    <section className='section bg-light'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg='7'>
            <div className='title text-center mb-5'>
              <h3>{summaryText.heading}</h3>
              <p className='text-muted mt-3'>
                {summaryText.sectionText.sectionText}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {cards.map(item => (
            <Col lg='4' key={item.entryTitle}>
              <div className='card'>
                <Img
                  className='card-img-top mb-2'
                  sizes={item.cardImage.sizes}
                  alt='Champions Club'
                />
                <div className='card-body text-center'>
                  <h5 className='mb-2'>{item.heading}</h5>
                  <div className='pt-3'>
                    <p>{item.description.description}</p>
                  </div>
                  <div className='pt-2 pb-2'>
                    <CallToAction
                      to={`${event.year}${item.callToAction.locationUrl}`}
                      className='btn btn-primary'
                    >
                      {item.callToAction.text}
                    </CallToAction>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default CardBlock
