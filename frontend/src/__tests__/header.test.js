import React from 'react'
import Header from '../components/header.js'

describe('header', () => {
  it('renders without crashing', () => {
    const component = mount(<Header />)
    expect(component).toMatchSnapshot()
  })

  it('has a logo', () => {
    const component = mount(<Header />)
    expect(component.exists('img')).toBe(true)
  })
})
