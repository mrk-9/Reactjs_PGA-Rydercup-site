import { graphql } from 'gatsby'

export const _ContentfulGalleryImages = graphql`
  fragment ContentfulGalleryImages on ContentfulGalleryImages {
    __typename
    id
    entryTitle
    imagesBlocks {
      ...ContentfulImageBlocks
    }
  }
`
