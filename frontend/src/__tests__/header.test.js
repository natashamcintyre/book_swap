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

  it('shows modal', () => {
    const component = mount(<Header />)
    component.find('button#isbnSearchButton').simulate('click')
    expect(component.find('div#isbnSearchModal').hasClass('modal display-block')).toBe(true);
  })

  it('hides modal', () => {
    const component = mount(<Header />)
    component.find('button#isbnSearchButton').simulate('click')
    component.find('#closeIsbnSearch').simulate('click')
    expect(component.find('div#isbnSearchModal').hasClass('modal display-none')).toBe(true);
  })
})
