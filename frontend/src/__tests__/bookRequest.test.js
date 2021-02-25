import React from 'react'
import BookRequest from '../components/bookRequest'

describe('bookRequest', () => {
  it('renders without crashing', () => {
    const component = mount(<BookRequest bookID='1' />)
    expect(component).toMatchSnapshot()
  })

  it('has submit button', () => {
    const component = mount(<BookRequest bookID='1'/>)
    expect(component.exists('button#book-request-button')).toBe(true)
  })

  it('has a bookID', () => {
    const component = mount(<BookRequest bookID='1'/>)
    expect(component.props().bookID).toBe('1')
  })
})
