import React from 'react'
import BookContainer from '../components/bookContainer'

import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

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
})
