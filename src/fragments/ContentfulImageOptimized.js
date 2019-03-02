import { graphql } from 'gatsby'

export const _ContentfulImage = graphql`
  fragment ContentfulImage on ContentfulAsset {
    file {
      url
      fileName
    }
    title
    description
    sizes(maxWidth: 1200, quality: 75) {
      ...GatsbyContentfulSizes_withWebp
    }
    fluid {
      ...GatsbyContentfulFluid_withWebp
    }
  }
`

export const _ContentfulImage100px = graphql`
  fragment ContentfulImage100px on ContentfulAsset {
    file {
      url
      fileName
    }
    title
    description
    sizes(maxWidth: 100, quality: 75) {
      ...GatsbyContentfulSizes_withWebp
    }
  }
`
