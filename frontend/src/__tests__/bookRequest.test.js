import React from 'react'
import BookRequest from '../components/bookRequest'

import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('bookRequest', () => {
  it('renders without crashing', () => {
    const component = mount(<BookRequest />)
    expect(component).toMatchSnapshot()
  })

  it('has submit button', () => {
    const component = mount(<BookRequest />)
    expect(component.exists('button#book-request-button')).toBe(true)
  })
})
