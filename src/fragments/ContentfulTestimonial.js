import { graphql } from 'gatsby'

export const _Testimonial = graphql`
  fragment ContentfulTestimonial on ContentfulTestimonial {
    __typename
    id
    entryTitle
    name
    occupation
    quote {
      quote
    }
  }
`
