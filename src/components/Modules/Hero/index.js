import React from 'react'
import { pathOr } from 'ramda'
import { ArrowDown } from 'react-feather'
import { scroller } from 'react-scroll'
import { Col, Container, Row } from 'reactstrap'
import styled from 'styled-components'
import Hero, { VideoHero } from '../../Hero'
import LazyLoad from 'react-lazyload'
import { CircleButton } from '../../Styles/Links'

const VimeoWrapper = styled.div`
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;

  iframe {
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const HeroHeading = styled(Col)`
  position: absolute;
  top: 90%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 300;
  transform: translateX(-50%) translateY(-50%);

  h1 {
    font-size: 55px;
    letter-spacing: -1px;
  }
`

export const HeroSection = data => {
  const layout = pathOr('', ['layout'], data)
  const heading = pathOr('', ['heading'], data)
  const subheading = pathOr('', ['subheading'], data)
  const eventDates = pathOr('', ['eventDates'], data)
  const eventLocation = pathOr('', ['eventLocation'], data)
  const backgroundImage = pathOr('', ['backgroundImage'], data)
  const backgroundVideoUrl = pathOr('', ['backgroundVideoUrl'], data)
  const overlayImage = pathOr('', ['overlayImage', 'file', 'url'], data)

  const VideoText = styled.div`
    color: #fff;
    z-index: 300;
    min-width: 100%;
    text-align: center;

    &:after {
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(15, 16, 19, 0.2), rgba(15, 16, 19, 0.2)),
        url(${overlayImage});
      z-index: -1;
    }
    @media (max-width: 768px) {
      top: 80%;
      width: 90%;
      max-height: 300px;
      padding: 30px;
    }
  `

  switch (layout) {
    case 'Home Page':
      return (
        <VideoHero
          image={backgroundImage.fluid}
          height='100vh'
          gradient={overlayImage}
        >
          <VimeoWrapper>
            <LazyLoad>
              <iframe
                title='video-hero'
                src={backgroundVideoUrl}
                frameBorder='0'
                webkitallowfullscreen='true'
                mozallowfullscreen='true'
                allowFullScreen
              />
            </LazyLoad>
          </VimeoWrapper>
          <VideoText>
            <p className='text-uppercase mb-2 text-white subtitle'>
              {eventDates} • {eventLocation}
            </p>
            <h1 className='text-white'>{heading}</h1>
            <p className='lead mt-4'>{subheading}</p>
            <div className='mt-5 mb-5'>
              <CircleButton
                onClick={() =>
                  scroller.scrollTo('about', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                  })
                }
                aria-label='about'
              >
                <ArrowDown />
              </CircleButton>
            </div>
          </VideoText>
        </VideoHero>
      )

    case 'Standard':
      return (
        <Hero
          image={backgroundImage.fluid}
          height='70vh'
          gradient={overlayImage}
        >
          <Container>
            <Row className='justify-content-center'>
              <HeroHeading lg='8' className='text-center text-white'>
                <h1 className='text-white'>{heading}</h1>
              </HeroHeading>
            </Row>
          </Container>
        </Hero>
      )
    default:
      return 'No Layout Selected'
  }
}
