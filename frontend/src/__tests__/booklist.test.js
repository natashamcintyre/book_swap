import React from 'react'
import BookList from '../components/bookList'

import { mount, shallow } from 'enzyme'

describe('booklist', () => {
  it('renders without crashing', () => {
    const component = mount(<BookList />)
    expect(component).toMatchSnapshot()
  })

  it('takes books as props and displays them', () => {
    const component = shallow(<BookList books={[{ title: 'testTitle', author: 'testAuthor' }]} />)
    expect(component.find('ul#books_list').children().length).toBe(1)
  })
})
