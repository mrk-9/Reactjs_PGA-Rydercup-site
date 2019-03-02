import { graphql } from 'gatsby'

export const _ContentfulFooter = graphql`
  fragment ContentfulFooter on ContentfulFooter {
    __typename
    id
    entryTitle
    logo {
      file {
        url
      }
    }
    navLinkList {
      heading
      sectionText {
        internal {
          content
        }
      }
    }
  }
`
