import { graphql } from 'gatsby'

export const _ContentfulCard = graphql`
  fragment ContentfulCard on ContentfulCard {
    __typename
    id
    entryTitle
    heading
    cardImage {
      ...ContentfulImage
    }
    description {
      description
    }
    callToAction {
      locationUrl
      text
    }
  }
`
