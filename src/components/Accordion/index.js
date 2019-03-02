import React, { Component } from 'react'
import { Collapse, CardBody } from 'reactstrap'
import { ArrowDownCircle } from 'react-feather'
import styled from 'styled-components'
import Markdown from '../../components/Styles/Markdown'

const AccordionHeading = styled.button`
  margin: 0;
  font-family: inherit;
  width: 100%;
  text-align: left;
  background: #fff;
  border: none;
  padding: 0.75rem 1rem;
  font-weight: bold;
  font-size: 1.05rem;
  cursor: pointer;
  color: #565355;
  transition: transform 0.3s linear;
  &:hover {
    color: #c81414;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
    padding: 1.25rem 2rem;
    line-height: 2;
  }
`

const AccordionContent = styled(Collapse)`
  border-bottom: 1px solid #f2f2f2;
`

class Accordion extends Component {
  constructor (props) {
    super(props)

    this.state = { collapse: false }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render () {
    const ArrowIcon = styled(ArrowDownCircle)`
      display: inline-block;
      position: absolute;
      right: 0;
      opacity: 0.35;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
      transform: ${this.state.collapse ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: transform 0.3s linear;
      @media (max-width: 768px) {
        right: 30px;
      }
    `
    return (
      <div>
        <AccordionHeading onClick={this.toggle}>
          {this.props.heading}
          <ArrowIcon />
        </AccordionHeading>
        <AccordionContent isOpen={this.state.collapse}>
          <CardBody>
            <Markdown value={this.props.body} />
          </CardBody>
        </AccordionContent>
      </div>
    )
  }
}

export default Accordion
