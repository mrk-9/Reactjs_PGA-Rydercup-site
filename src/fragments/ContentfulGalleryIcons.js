import { graphql } from 'gatsby'

export const _ContentfulGalleryIcons = graphql`
  fragment ContentfulGalleryIcons on ContentfulGalleryIcons {
    __typename
    id
    entryTitle
    displayStyle
    heading
    icons {
      iconImage {
        ...ContentfulImage100px
      }
    }
  }
`
