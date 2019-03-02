import React from 'react'
import { pathOr } from 'ramda'
import { Container, Col, Row } from 'reactstrap'
import Hero from '../../../Hero'
import TextSection from '../../TextSection'

const Default = () => <div>Default block</div>

const slotsMapping = {
  default: Default,
  ContentfulTextSection: TextSection
}

const Row1Column = data => {
  const layout = pathOr('', ['layout'], data)
  const widthLg = pathOr(12, ['widthLg'], data)
  const widthMd = pathOr(12, ['widthMd'], data)
  const widthSm = pathOr(12, ['widthSm'], data)
  const widthXs = pathOr(12, ['widthXs'], data)
  const slots = pathOr([], ['contentSlots'], data)
  const backgroundImage = pathOr('', ['backgroundImage'], data)
  const calloutHeading = pathOr('', ['contentSlots', '0', 'heading'], data)
  const calloutText = pathOr(
    '',
    ['contentSlots', '0', 'sectionText', 'internal', 'content'],
    data
  )

  switch (layout) {
    case 'Callout':
      return (
        <Hero image={backgroundImage.fluid} height='550px'>
          <Container>
            <Row>
              <Col lg='6'>
                <div className='cta-content text-white'>
                  <h3 className='mb-4 text-white'>{calloutHeading}</h3>
                  <p className='text-light'>{calloutText}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Hero>
      )
    default:
      return (
        <section className='bg-light section'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={widthLg} md={widthMd} sm={widthSm} xs={widthXs}>
                {slots.map(({ __typename, ...rest }) => {
                  const Component =
                    slotsMapping[__typename] || slotsMapping['default']
                  return <Component key={__typename} {...rest} />
                })}
              </Col>
            </Row>
          </Container>
        </section>
      )
  }
}

export default Row1Column
