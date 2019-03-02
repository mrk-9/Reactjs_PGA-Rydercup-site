import { graphql } from 'gatsby'

export const _Hero = graphql`
  fragment ContentfulHero on ContentfulHero {
    __typename
    id
    layout
    heading
    subheading
    eventDates
    eventLocation
    callToAction
    backgroundVideoUrl
    backgroundImage {
      ...ContentfulImage
    }
    overlayImage {
      file {
        url
      }
    }
  }
`
