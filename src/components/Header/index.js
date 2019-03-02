import React from 'react'
import { Menu, X } from 'react-feather'
import {
  Collapse,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  NavItem
} from 'reactstrap'
import { propOr, pathOr } from 'ramda'
import { v1 as uuidv1 } from 'uuid'
import { globalNav } from './data'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PrimaryLink = styled(Link)`
  background-color: #c81414;
  border: 1px solid #c81414;
  color: #fff;
  font-size: 12px;
  transition: all 0.5s;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 25px;
  border-radius: 50px;
  &:hover {
    background-color: #ef4b4b;
    border: 1px solid #ef4b4b;
    outline: none;
    text-decoration: none;
  }
`

export default class Header extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      isTop: true
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentDidMount () {
    document.addEventListener('scroll', () => {
      const isTop = window.pageYOffset < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
      window.onbeforeunload = function () {
        window.scrollTo(0, 0)
      }
    })
  }

  render () {
    const prefixYear = pathOr('Unknown', ['event', 'year'], this.props)
    const navLogoTop = pathOr(
      '../../images/logo.png',
      ['navLogoTop', 'file', 'url'],
      this.props.event
    )
    const navLogoScroll = pathOr(
      '../../images/logo.png',
      ['navLogoScroll', 'file', 'url'],
      this.props.event
    )
    const topNavClasses = ['navbar-custom', 'sticky', 'sticky-dark'].join(' ')
    const scrollNavClasses = [
      'navbar-custom',
      'sticky',
      'sticky-dark',
      'shrink'
    ].join(' ')

    return (
      <>
        <Navbar
          fixed='top'
          expand='lg'
          className={this.state.isTop ? topNavClasses : scrollNavClasses}
        >
          <div className='container'>
            <Link className={'logo'} to={`${prefixYear}`} aria-label='logo'>
              <img
                className={this.state.isTop ? 'logo-light' : 'logo-dark'}
                src={this.state.isTop ? navLogoTop : navLogoScroll}
                alt=''
              />
            </Link>
            <button
              type='button'
              className='navbar-toggler'
              onClick={this.toggle}
              role='button'
              aria-label='navbar-toggler'
            >
              <Menu className='feather feather-menu' />
            </button>

            <Modal
              isOpen={this.state.isOpen}
              toggle={this.toggle}
              id='navbarMobile'
              className='modal-dialog modal-dialog-centered'
              role='document'
            >
              <ModalHeader
                toggle={this.toggle}
                close={
                  <button
                    className='close'
                    onClick={this.toggle}
                    data-dismiss='modal-dialog modal-content'
                  >
                    <X />
                  </button>
                }
              />
              <ModalBody className='text-center'>
                <ul className='navbar-nav ml-auto navbar-center'>
                  {globalNav.map(item => {
                    const url = propOr(null, 'url', item)
                    return item.url === '/contact' ? (
                      <NavItem className='nav-item' key={uuidv1()}>
                        <PrimaryLink
                          className='btn btn-primary btn-block mt-4'
                          to={`${prefixYear}${url}`}
                        >
                          {propOr('N/A', 'header', item)}
                        </PrimaryLink>
                      </NavItem>
                    ) : (
                      <NavItem className='nav-item' key={uuidv1()}>
                        <Link className='nav-link' to={`${prefixYear}${url}`}>
                          {propOr('N/A', 'header', item)}
                        </Link>
                      </NavItem>
                    )
                  })}
                </ul>
              </ModalBody>
            </Modal>
            <Collapse className='collapse navbar-collapse' navbar>
              <Nav className='ml-auto navbar-center' navbar>
                {globalNav.map(item => {
                  const url = propOr(null, 'url', item)
                  return (
                    <NavItem className='nav-item' key={uuidv1()}>
                      <Link
                        className={
                          item.url === '/contact'
                            ? 'nav-link navbar-btn'
                            : 'nav-link'
                        }
                        to={`${prefixYear}${url}`}
                      >
                        {propOr('N/A', 'header', item)}
                      </Link>
                    </NavItem>
                  )
                })}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    )
  }
}
