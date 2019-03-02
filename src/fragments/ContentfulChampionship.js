import { graphql } from 'gatsby'

export const _ContentfulChampionship = graphql`
  fragment ContentfulChampionship on ContentfulChampionship {
    __typename
    id
    name
    url
    events {
      ...ContentfulEvent
    }
  }
`
