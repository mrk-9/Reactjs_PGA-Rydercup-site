import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import { ChevronRight } from 'react-feather'
import Img from 'gatsby-image'

const ImageCardBlock = ({ event, imagesBlocks }) => {
  const imageBlocksArray = imagesBlocks || []
  return (
    <section className='section bg-light'>
      <Container>
        <Row>
          {imageBlocksArray.map(item => (
            <Col md='6' key={item.textOverlay}>
              <div className='card'>
                <Link
                  to={`${event.year}${item.linkUrl}`}
                  className='card-overlay'
                >
                  <Img
                    sizes={item.backgroundImage.sizes}
                    alt=''
                    className='card-img'
                  />
                  <div className='card-img-overlay'>
                    <h4 className='card-title'>
                      {item.textOverlay} <ChevronRight />
                    </h4>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ImageCardBlock
