import React from 'react'
import { ChevronUp } from 'react-feather'
import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 10px;
  right: 20px;
  display: none;
  text-align: center;
  z-index: 10000;
  border-radius: 3px;
  background-color: rgba(78, 84, 87, 0.7);
  transition: all 0.5s;
  color: #fff;
  padding-top: 12px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
  }
`

class ScrollToTopButton extends React.Component {
  constructor () {
    super()

    this.state = {
      isTop: true
    }
  }

  componentDidMount () {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  render () {
    return (
      <Wrapper
        style={{ display: this.state.isTop ? 'none' : 'inline' }}
        onClick={() =>
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
        }
      >
        <ChevronUp />
      </Wrapper>
    )
  }
}

export default ScrollToTopButton
