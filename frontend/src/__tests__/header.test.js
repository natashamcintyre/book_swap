import React from 'react'
import Header from '../components/header.js'

import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('header', () => {
  it('renders without crashing', () => {
    const component = mount(<Header />)
    expect(component).toMatchSnapshot()
  })
})
