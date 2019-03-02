require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const getEnv = name => (process.env[name] ? process.env[name] : '')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://attend.rydercup.com'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: '' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ryder Cup',
        short_name: 'Ryder Cup',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#00234B',
        display: 'minimal-ui',
        icon: 'src/images/logo.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: getEnv('CONTENTFUL_SPACE_ID'),
        accessToken: getEnv('CONTENTFUL_ACCESS_TOKEN')
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5W8GNQF',
        includeInDevelopment: false
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-remove-trailing-slashes'
  ]
}
