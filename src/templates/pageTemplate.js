import { graphql } from 'gatsby'
import { pathOr } from 'ramda'
import React from 'react'
import CardBlock from '../components/Modules/CardBlock'
import ContentBlockImgRight from '../components/Modules/ContentBlockImgRight'
import Row1Column from '../components/Modules/Rows/1Column'
import { Row2Columns } from '../components/Modules/Rows/2Columns'
import { HeroSection } from '../components/Modules/Hero'
import ImageCardBlock from '../components/Modules/ImageCardBlock'
import PartnerLogos from '../components/Modules/PartnerLogos'
import Layout from '../layouts'
import Testimonial from '../components/Modules/Testimonial'

const Default = () => <div>Default block</div>

const modulesMapping = {
  default: Default,
  ContentfulHero: HeroSection,
  ContentfulContentBlock5050ImageRight: ContentBlockImgRight,
  ContentfulGalleryCards: CardBlock,
  ContentfulGalleryImages: ImageCardBlock,
  ContentfulGalleryIcons: PartnerLogos,
  ContentfulRow1Column: Row1Column,
  ContentfulRow2Columns: Row2Columns,
  ContentfulTestimonial: Testimonial
}

const PageTemplate = ({ data: { event: _event, page: _page }, ...rest }) => {
  const event = pathOr(null, ['edges', '0', 'node'], _event)
  const page = pathOr(null, ['edges', '0', 'node'], _page)
  const pageModules = pathOr([], ['modules'], page)

  return (
    <Layout event={event}>
      {pageModules.map(({ __typename, id, ...rest }) => {
        const Component =
          modulesMapping[__typename] || modulesMapping['default']
        return <Component key={__typename} event={event} {...rest} />
      })}
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($eventContentfulId: String, $pageContentfulId: String) {
    event: allContentfulEvent(
      filter: { contentful_id: { eq: $eventContentfulId } }
    ) {
      edges {
        node {
          ...ContentfulEvent
        }
      }
    }
    page: allContentfulPage(
      filter: { contentful_id: { eq: $pageContentfulId } }
    ) {
      edges {
        node {
          modules {
            ... on Node {
              ...ContentfulHero
              ...ContentfulContentBlock5050ImageRight
              ...ContentfulGalleryCards
              ...ContentfulGalleryImages
              ...ContentfulGalleryIcons
              ...ContentfulRow1Column
              ...ContentfulRow2Columns
              ...ContentfulTestimonial
            }
          }
        }
      }
    }
  }
`
