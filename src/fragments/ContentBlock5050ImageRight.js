import { graphql } from 'gatsby'

export const _ContentBlock5050ImageRight = graphql`
  fragment ContentfulContentBlock5050ImageRight on ContentfulContentBlock5050ImageRight {
    __typename
    id
    entryTitle
    heading
    subheading
    sectionText {
      internal {
        content
      }
    }
    callToAction
    imageRight {
      ...ContentfulImage
    }
    imageRightDescription
  }
`
