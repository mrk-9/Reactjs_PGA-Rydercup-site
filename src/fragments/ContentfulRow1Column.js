import { graphql } from 'gatsby'

export const _Row1Column = graphql`
  fragment ContentfulRow1Column on ContentfulRow1Column {
    __typename
    id
    entryTitle
    layout
    backgroundImage {
      ...ContentfulImage
    }
    widthLg
    widthMd
    widthSm
    widthXs
    contentSlots {
      ... on ContentfulTextSection {
        __typename
        heading
        subheading
        sectionText {
          internal {
            content
          }
        }
      }
    }
  }
`
