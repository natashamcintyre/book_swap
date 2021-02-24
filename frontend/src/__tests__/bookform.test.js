import React from 'react'
import BookForm from '../components/bookForm'

import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

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
