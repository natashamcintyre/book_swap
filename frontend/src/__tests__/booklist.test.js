import React from 'react'
import BookList from '../components/bookList'

describe('booklist', () => {
  it('renders without crashing', () => {
    const component = mount(<BookList />)
    expect(component).toMatchSnapshot()
  })

  it('renders books list', () => {
    const component = mount(<BookList />)
    expect(component.exists('ul#books_list')).toBe(true)
  })
})
