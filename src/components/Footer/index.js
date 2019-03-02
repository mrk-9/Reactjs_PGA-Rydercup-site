import { Link } from 'gatsby'
import { pathOr, prop, propOr } from 'ramda'
import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather'
import { Box, Flex, Image, Text } from 'rebass'
import styled from 'styled-components'
import { theme } from '../../theme'
import Container from '../Container'
import SocialMediaIcon from '../SocialMediaIcon'

const PgaTrademark = 'PGA of America. All Rights Reserved.'

const TextLink = styled(Text)`
  transition: all 0.5s;
  font-size: 14px;
  line-height: 1.5;
  color: ${theme.colors.darkgray};
  &:hover {
    color: ${theme.colors.white};
  }
`

const Footer = ({ event }) => {
  const pgaLogo = pathOr('', ['footer', 'logo', 'file', 'url'], event)
  const dynamicLinks = pathOr([], ['footer', 'navLinkList'], event)

  let displayColumn = {}
  dynamicLinks.forEach(list => {
    const linkList = list.sectionText.internal.content.split(',')
    const displayLinks = linkList.map(link => {
      const linkMatch = link.split(';')
      return {
        name: linkMatch[0],
        url: linkMatch[1]
      }
    })
    displayColumn[list.heading] = displayLinks
  })

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: prop('facebookUrl', event) },
    { name: 'Twitter', icon: Twitter, url: prop('twitterUrl', event) },
    {
      name: 'Instagram',
      icon: Instagram,
      url: prop('instagramUrl', event)
    },
    { name: 'Youtube', icon: Youtube, url: prop('youtubeUrl', event) }
  ]

  return (
    <Box width={1} bg={theme.colors.bg_gray} p={'60px 0px 40px 0px'}>
      <Container>
        <Flex
          mx={3}
          flexDirection={['column', null, null, 'row']}
          alignItems='start'
        >
          <Box width={[1, 1, 1, 3 / 12]} px={3}>
            <Image height='40px' mb={3} src={pgaLogo} aria-label='pga-logo' />
            <Flex mb={'22px'}>
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={url}
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={name}
                >
                  <SocialMediaIcon mr={3} children={<Icon size={18} />} />
                </a>
              ))}
            </Flex>
            <Text fontSize={0} color={theme.colors.darkgray} mb={4}>
              {new Date().getFullYear()} © {PgaTrademark}
            </Text>
          </Box>
          <Box width={[1, 1, 1, 9 / 12]} px={3}>
            <Flex
              mx={-3}
              alignItems='start'
              flexDirection={['column', null, null, 'row']}
            >
              {Object.keys(displayColumn).map(item => (
                <Box width={[1, 1, 1, 3 / 12]} px={3} key={item}>
                  <Text
                    fontSize={'15px'}
                    color={theme.colors.white}
                    lineHeight={'24px'}
                    mb={3}
                  >
                    {item || null}
                  </Text>
                  {displayColumn[item].map(link => {
                    const linkName = propOr('#', 'name', link)
                    const linkUrl = propOr('#', 'url', link)

                    return linkUrl.includes('http') ? (
                      <a key={linkName} href={linkUrl}>
                        <TextLink mb={3}>{linkName}</TextLink>
                      </a>
                    ) : (
                      <Link key={linkName} to={`${event.year}/${linkUrl}`}>
                        <TextLink mb={3}>{linkName}</TextLink>
                      </Link>
                    )
                  })}
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
