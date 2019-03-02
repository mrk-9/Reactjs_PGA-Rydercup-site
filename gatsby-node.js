const path = require('path')
const { pathOr, propOr, prop } = require('ramda')

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const CHAMPIONSHIP_ID = pathOr(
  '',
  ['env', 'CONTENTFUL_CHAMPIONSHIP_ID'],
  process
)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('src/templates/pageTemplate.js')

    resolve(
      graphql(
        `
          query currentChampionship($championshipId: String!) {
            championship: allContentfulChampionship(
              filter: { contentful_id: { eq: $championshipId } }
            ) {
              edges {
                node {
                  contentfulId: contentful_id
                  name
                  url
                  events {
                    name
                    year
                    contentfulId: contentful_id
                    pages {
                      id
                      slug
                      contentfulId: contentful_id
                    }
                  }
                }
              }
            }
          }
        `,
        { championshipId: CHAMPIONSHIP_ID }
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const championship = pathOr(
          null,
          ['data', 'championship', 'edges', '0', 'node'],
          result
        )
        if (!championship) {
          const msg = `ERROR: Cannot find Championship Event for this id:[${CHAMPIONSHIP_ID}]`
          console.log(msg)
          reject(new Error(msg))
        }

        console.log('Championship :', championship)

        propOr([], 'events', championship).map(event => {
          const eventYearPrefix = prop('year', event)
          if (!eventYearPrefix) {
            const msg = `ERROR: eventYearPrefix not defined. Championship:[${CHAMPIONSHIP_ID}], Event:[${
              event.name
            }]`
            console.log(msg)
            reject(new Error(msg))
          }

          propOr([], 'pages', event).map(page => {
            console.log(
              'Page:',
              `${eventYearPrefix}/${page.slug === '/' ? '' : page.slug}`
            )

            createPage({
              path: `${eventYearPrefix}/${page.slug === '/' ? '' : page.slug}`,
              component: pageTemplate,
              context: {
                eventYearPrefix: eventYearPrefix,
                pageContentfulId: page.contentfulId,
                eventContentfulId: event.contentfulId
              }
            })
          })
        })
      })
    )
  })
}
