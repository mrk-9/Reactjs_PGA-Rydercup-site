import { graphql } from 'gatsby'

export const _Row2Columns = graphql`
  fragment ContentfulRow2Columns on ContentfulRow2Columns {
    __typename
    page {
      contentful_id
    }
    id
    entryTitle
    layout
    leftWidthLg
    rightWidthLg
    submitButton {
      text
      locationUrl
    }
    contactCards {
      heading
      subheading
      avatar {
        file {
          url
        }
      }
      linkText
      linkUrl
    }
    contactForm {
      provider
      mailchimpGroupName
      mailchimpGroupId
      heading
      subheading
      callToAction
      row___2_columns {
        page {
          slug
          event {
            siteUrl
          }
        }
      }
    }
    iconGallery {
      heading
      icons {
        iconImage {
          file {
            url
          }
        }
        iconText
      }
    }
    imageGallery {
      images {
        ... on ContentfulAsset {
          ...ContentfulImage
        }
      }
    }
    locationInfo {
      heading
      locationImage {
        file {
          url
        }
      }
      mapLinkFineprint {
        mapLinkFineprint
      }
      mapLink
    }
    textSection {
      displayStyle
      heading
      subheading
      sectionText {
        internal {
          content
        }
      }
    }
    textSectionRight {
      heading
    }
  }
`
