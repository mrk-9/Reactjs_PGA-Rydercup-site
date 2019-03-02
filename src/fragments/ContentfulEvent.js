import { graphql } from 'gatsby'

export const _ContentfulEvent = graphql`
  fragment ContentfulEvent on ContentfulEvent {
    __typename
    id
    name
    year
    navLogoTop {
      file {
        url
      }
    }
    navLogoScroll {
      file {
        url
      }
    }
    footer {
      ... on Node {
        ...ContentfulFooter
      }
    }
    eventFacilityName
    eventStreetAddress
    eventCity
    eventZip
    eventRegion
    eventCountry
    eventStartDate
    eventEndDate
    eventDescription {
      eventDescription
    }
    eventMedia {
      file {
        url
      }
    }
    banner {
      file {
        url
      }
    }
    title
    shortTitle
    titleAlt
    language
    domainUrl
    siteUrl
    seoDescription
    favicon {
      file {
        url
      }
    }
    companyName
    themeColor
    backgroundColor
    facebookUrl
    facebookDescription
    facebookTitle
    facebookImage {
      file {
        url
      }
    }
    facebookArticle
    twitterUrl
    twitterUsername
    twitterTitle
    twitterDescription
    twitterImage {
      file {
        url
      }
    }
    instagramUrl
    youtubeUrl
  }
`
