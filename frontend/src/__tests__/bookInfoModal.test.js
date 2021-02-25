import React from 'react'
import BookInfoModal from '../components/bookInfoModal'
// import stockBookImage from '../image/navylogo.png'

describe('bookform', () => {
  it('renders without crashing', () => {
    const book = JSON.stringify({ title: 'test_title', authors: [{ name: 'test_author' }], identifiers: { isbn_13: 'test_isb' }, cover: { medium: 'test_url' } })
    const users = [{ username: 'test_username', email: 'test_email', location: 'test_postcode' }]
    const data = { book: book, users: users }
    const component = mount(<BookInfoModal handleClose={true} show={true} data={data} requestBook={true} />)
    expect(component).toMatchSnapshot()
  })

  // it('sets image to stockBookImage', () => {
  //   const book = JSON.stringify({ title: 'test_title', authors: [{ name: 'test_author' }], identifiers: { isbn_13: 'test_isb' }, cover: { medium: 'test_url' } })
  //   const users = [{ username: 'test_username', email: 'test_email', location: 'test_postcode' }]
  //   const data = { book: book, users: users }
  //   const component = shallow(<BookInfoModal handleClose={() => {true}} show={true} data={data} requestBook={() => { true }} />)
  //   expect(component.find('img').prop('src')).toEqual(stockBookImage)
  // })
})
