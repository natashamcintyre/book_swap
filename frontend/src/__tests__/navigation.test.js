import React from 'react'
import Navigation from '../components/navigation.js'
import mockAxios from '../__mocks__/axios.js'

import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('navigation', () => {
  beforeEach(() => {
    mockAxios.post.mockImplementation(() =>
      Promise.resolve({ data: [] }))

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: [] }))
  })

  afterEach(() => {
    mockAxios.post.mockClear()
    mockAxios.get.mockClear()
  })

  it('renders without crashing', () => {
    const component = mount(<Navigation />)
    expect(component).toMatchSnapshot()
  })

  // it('logged in user can sign out', async () => {
  //   const component = mount(<Navigation logout={ function (item) { return true } } />)

  //   mockAxios.post.mockImplementation(() => {
  //     Promise.resolve({ msg: 'You have successfully logged out' })
  //   })
  //   expect(component.exists('a#logout_link')).toBe(true)
  //   component.find('a#logout_link').simulate('click')
  //   expect(mockAxios.post).toHaveBeenCalledWith('http://localhost:3001/logout')
  //   await component.update()
  //   expect(component.find('UserSignin').exists()).toBe(true)
  // })
})
