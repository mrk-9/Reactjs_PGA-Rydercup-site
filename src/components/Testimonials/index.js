import { propOr } from 'ramda'
import React, { Component } from 'react'
import { Carousel, CarouselIndicators, CarouselItem } from 'reactstrap'
import { testimonialData } from './data'

class Testimonials extends Component {
  constructor (props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting () {
    this.animating = true
  }

  onExited () {
    this.animating = false
  }

  next () {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === testimonialData.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous () {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? testimonialData.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex (newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render () {
    const { activeIndex } = this.state

    const slides = testimonialData.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.name}
        >
          <div className='text-center'>
            <img
              src={propOr(null, 'src', item)}
              alt=''
              height='140px'
              className='mb-4'
            />
            <p className='text-muted'>{propOr('N/A', 'description', item)}</p>
            <h5>{propOr('N/A', 'name', item)}</h5>
            <p className='text-muted'>{propOr('N/A', 'extra', item)}</p>
          </div>
        </CarouselItem>
      )
    })

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={testimonialData}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
      </Carousel>
    )
  }
}

export default Testimonials
