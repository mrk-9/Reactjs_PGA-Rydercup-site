import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../layouts'

describe('index page', () => {
  it('should render link', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper).toBeDefined()
  })
})
