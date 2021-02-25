import React from 'react'
import BookForm from '../components/bookForm'

describe('bookform', () => {
  it('renders without crashing', () => {
    const component = mount(<BookForm />)
    expect(component).toMatchSnapshot()
  })

  it('has submit button', () => {
    const component = mount(<BookForm />)
    expect(component.exists('button#submit')).toBe(true)
  })
})
