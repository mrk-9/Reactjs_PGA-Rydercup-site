import React from 'react'
import { Box } from 'rebass'

const Container = props => (
  <Box {...props} mx='auto' width={[1, '540px', '720px', '960px', '1140px']} />
)

export default Container
