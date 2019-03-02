import React from 'react'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'
import { theme } from '../../theme'
import Container from '../Container'

const Title = styled(Text)`
  font-size: 15px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  color: ${theme.colors.gray};
`

const SubTitle = styled(Text)`
  font-weight: 300;
  color: ${theme.colors.darkgray};
  font-size: 28px;
  margin-bottom: 8px;
  line-height: 33px;
  margin-top: 0;
  text-align: center;
  font-family: ${theme.fonts.secondary};
`

const Section = ({
  bg,
  title,
  subtitle,
  description = () => null,
  content = () => null
}) => (
  <Box bg={bg || theme.colors.bg_gray} py={'80px'}>
    <Container>
      <Flex
        width={[1, null, null, 7 / 12]}
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        mx={'auto'}
        px={'16px'}
      >
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle as='h3'>{subtitle}</SubTitle>}
        {description && description()}
      </Flex>
      {content && content()}
    </Container>
  </Box>
)

export default Section
