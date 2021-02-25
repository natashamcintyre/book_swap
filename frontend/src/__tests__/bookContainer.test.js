import React from 'react'
import BookContainer from '../components/bookContainer'

describe('bookContainer', () => {
  it('renders without crashing', () => {
    const book = JSON.stringify({ title: 'test_title', authors: [{ name: 'test_author' }], identifiers: { isbn_13: 'test_isb' }, cover: { medium: 'test_url' } })
    const users = [{ username: 'test_username', email: 'test_email', location: 'test_postcode' }]
    const data = { book: book, users: users }
    const component = shallow(<BookContainer className='book' data={data}/>)
    expect(component).toMatchSnapshot()
  })

  it('takes books as props and displays them', () => {
    const book = JSON.stringify({ title: 'test_title', authors: [{ name: 'test_author' }], identifiers: { isbn_13: 'test_isb' }, cover: { medium: 'test_url' } })
    const users = [{ username: 'test_username', email: 'test_email', location: 'test_postcode' }]
    const data = { book: book, users: users }
    const component = shallow(<BookContainer className='book' data={data}/>)
    expect(component.find('div.inner-book-container').children().length).toBe(4)
  })

  it('has a button to show more info', () => {
    const showModalMock = jest.fn()
    const book = JSON.stringify({ title: 'test_title', authors: [{ name: 'test_author' }], identifiers: { isbn_13: 'test_isb' }, cover: { medium: 'test_url' } })
    const users = [{ username: 'test_username', email: 'test_email', location: 'test_postcode' }]
    const data = { book: book, users: users }
    const component = shallow(<BookContainer className='book' data={data} showModal={showModalMock}/>)
    component.find('button').simulate('click')
    expect(showModalMock.mock.calls.length).toBe(1)
  })
})
