import styled from 'styled-components'
import { Box } from 'rebass'
import { theme } from '../../theme'
import { opacify } from 'polished'

const SocialMediaIcon = styled(Box)`
  height: 36px;
  width: 36px;
  color: ${theme.colors.darkgray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${opacify(0.5, theme.colors.darkgray)};
  transition: all 0.5s;

  &:hover {
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }
  }
`

export default SocialMediaIcon
