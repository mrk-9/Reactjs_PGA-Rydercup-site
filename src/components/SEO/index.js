import React from 'react'
import Helmet from 'react-helmet'
import { propOr, pathOr } from 'ramda'
import Facebook from './Facebook'
import Twitter from './Twitter'

const SEO = ({ event }) => {
  const language = pathOr('', ['language'], event)
  const siteUrl = pathOr('', ['siteUrl'], event)
  const title = pathOr('', ['title'], event)
  const shortTitle = pathOr('', ['shortTitle'], event)
  const seoDescription = pathOr('', ['seoDescription'], event)
  const banner = pathOr('', ['banner'], event)
  const facebookUrl = pathOr('', ['facebookUrl'], event)
  const facebookTitle = pathOr('', ['facebookTitle'], event)
  const facebookDescription = pathOr('', ['facebookDescription'], event)
  const facebookImage = pathOr('', ['facebookImage'], event)
  const facebookArticle = pathOr('', ['facebookArticle'], event)
  const twitterUsername = pathOr('', ['twitterUsername'], event)
  const twitterTitle = pathOr('', ['twitterTitle'], event)
  const twitterDescription = pathOr('', ['twitterDescription'], event)
  const twitterImage = pathOr('', ['twitterImage'], event)

  const websiteJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    '@id': siteUrl,
    url: siteUrl,
    name: title,
    alternateName: shortTitle || ''
  }

  const eventJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: propOr('N/A', 'name', event),
    startDate: propOr('N/A', 'eventStartDate', event),
    endDate: propOr('N/A', 'eventEndDate', event),
    location: {
      '@type': 'Place',
      name: propOr('N/A', 'eventFacilityName', event),
      address: {
        '@type': 'PostalAddress',
        streetAddress: propOr('N/A', 'eventStreetAddress', event),
        addressLocality: propOr('N/A', 'eventCity', event),
        postalCode: propOr('N/A', 'eventZip', event),
        addressRegion: propOr('N/A', 'eventRegion', event),
        addressCountry: propOr('N/A', 'eventCountry', event)
      }
    },
    image: propOr([], 'eventMedia', event).map(
      media => 'https:' + pathOr('N/A', ['file', 'url'], media)
    ),
    description: pathOr('N/A', ['eventDescription', 'eventDescription'], event),
    performer: {
      '@type': 'PerformingGroup',
      name: 'PGA of America'
    }
  }

  const schemaOrgJSONLD = [...websiteJSONLD, ...eventJSONLD]

  return (
    <>
      <Helmet title={title}>
        <html lang={language} />
        <meta name='description' content={seoDescription} />
        <meta name='image' content={banner} />
        <meta name='apple-mobile-web-app-title' content={shortTitle} />
        <meta name='application-name' content={shortTitle} />
        <script type='application/ld+json'>
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <Facebook
        desc={facebookDescription}
        image={facebookImage}
        title={facebookTitle}
        type={facebookArticle ? 'article' : null}
        url={facebookUrl}
      />
      <Twitter
        title={twitterTitle}
        image={twitterImage}
        desc={twitterDescription}
        username={twitterUsername}
      />
    </>
  )
}

export default SEO
