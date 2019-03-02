import { graphql } from 'gatsby'

export const _ContentfulGalleryCards = graphql`
  fragment ContentfulGalleryCards on ContentfulGalleryCards {
    __typename
    id
    entryTitle
    summaryText {
      heading
      sectionText {
        sectionText
      }
    }
    cards {
      ...ContentfulCard
    }
  }
`
