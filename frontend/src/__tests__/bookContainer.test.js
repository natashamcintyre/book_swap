import React from 'react'
import BookContainer from '../components/bookContainer'

describe('bookContainer', () => {
  it('renders without crashing', () => {
    const component = mount(<BookContainer book={{ _id: 1, data: { title: 'testTitle', author: 'testAuthor', isbn: '999', postcode: 'test postcode', phoneNumber: '0857366366' } }}/>)
    expect(component).toMatchSnapshot()
  })

  it('takes books as props and displays them', () => {
    const component = mount(<BookContainer
        book={{ _id: 1, data: { title: 'testTitle', author: 'testAuthor', isbn: '999', postcode: 'test postcode', phoneNumber: '0857366366' } }} />)
    expect(component.find('li').children().length).toBe(4)
  })
})
