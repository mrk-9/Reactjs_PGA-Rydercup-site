import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { Flex } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { theme } from '../theme'
import './style.css'
import SEO from '../components/SEO'
import ScrollToTopButton from '../components/ScrollToTopButton'

const LayoutWrapper = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const ContentWrapper = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
`

const Layout = ({ event, children }) => {
  return (
    <>
      <SEO event={event} />
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <Header event={event} />
          <ScrollToTopButton />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer event={event} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  )
}
export default Layout
