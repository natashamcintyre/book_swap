import React from 'react'
import Header from '../components/header'

describe('header', () => {
  it('renders without crashing', () => {
    const component = mount(<Header />)
    expect(component).toMatchSnapshot()
  })
})
