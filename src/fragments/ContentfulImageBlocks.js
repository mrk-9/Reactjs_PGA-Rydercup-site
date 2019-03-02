import { graphql } from 'gatsby'

export const _ContentfulImageBlocks = graphql`
  fragment ContentfulImageBlocks on ContentfulImageBlocks {
    __typename
    id
    entryTitle
    textOverlay
    linkUrl
    backgroundImage {
      ...ContentfulImage
    }
  }
`
