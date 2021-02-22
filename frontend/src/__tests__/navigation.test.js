import React from 'react'
import Navigation from '../components/navigation'

describe('navigation', () => {
  it('renders without crashing', () => {
    const component = mount(<Navigation />)
    expect(component).toMatchSnapshot()
  })
})
