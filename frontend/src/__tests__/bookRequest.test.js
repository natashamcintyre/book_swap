import React from 'react'
import BookRequest from '../components/bookRequest'

describe('bookRequest', () => {
  it('renders without crashing', () => {
    const component = mount(<BookRequest bookID='1' />)
    expect(component).toMatchSnapshot()
  })

  it('has submit button', () => {
    const component = mount(<BookRequest bookID='1'/>)
    expect(component.exists('form#book_request')).toBe(true)
  })

  it('has a bookID', () => {
    const component = mount(<BookRequest bookID='1'/>)
    expect(component.props().bookID).toBe('1')
  })

  it('submits a request', () => {
    const requestBookMock = jest.fn()
    const component = mount(<BookRequest requestBook={requestBookMock} bookID='1'/>)
    expect(component.find("form#book_request").exists()).toBe(true)
    component.find("form#book_request").simulate('submit')
    expect(requestBookMock.mock.calls.length).toBe(1)
  })
})
