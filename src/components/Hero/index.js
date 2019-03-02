import Img from 'gatsby-image'
import React from 'react'
import styled, { css } from 'styled-components'

const GradientOverlay = css`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props =>
    props.gradient
      ? `linear-gradient(rgba(15, 16, 19, 0.2), rgba(15, 16, 19, 0.2)), url(${
        props.gradient
      })`
      : ''};
    z-index: 2;
  }
`

export const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: ${props => props.height};
`

export const HeroBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => props.top || '50%'};
  transform: translateY(-50%);
  z-index: 3;
`

const HeroBackgroundImage = styled(Img)`
  position: 'absolute';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  ${GradientOverlay};
`

export const VideoHeroBody = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VideoHero = ({
  image = null,
  color = null,
  height = null,
  gradient = false,
  ...props
}) => (
  <HeroContainer height={height}>
    <HeroBackgroundImage
      fluid={image}
      backgroundColor={color}
      gradient={gradient}
    />
    <VideoHeroBody>{props.children}</VideoHeroBody>
  </HeroContainer>
)

const Hero = ({
  image = null,
  color = null,
  height = null,
  gradient = false,
  top = '50%',
  ...props
}) => (
  <HeroContainer height={height}>
    <HeroBackgroundImage
      fluid={image}
      backgroundColor={color}
      gradient={gradient}
    />
    <HeroBody top={top}>{props.children}</HeroBody>
  </HeroContainer>
)

export default Hero
