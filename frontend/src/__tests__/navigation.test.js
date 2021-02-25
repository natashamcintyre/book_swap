import React from 'react'
import Navigation from '../components/navigation.js'
import mockAxios from '../__mocks__/axios.js'
import { MemoryRouter } from 'react-router-dom'

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
    // const component = mount(<Navigation />)
    const component = mount(
          <MemoryRouter>
            <Navigation />
          </MemoryRouter>
    )
    // })
    expect(component).toMatchSnapshot()
  })

  it('logs out when log out link is clicked', () => {
    const logoutMock = jest.fn()
    const component = mount(
          <MemoryRouter>
            <Navigation logout={logoutMock}/>
          </MemoryRouter>
    )

    expect(component.find("a#logout_link").exists()).toBe(true)
    component.find("a#logout_link").simulate('click')
    expect(logoutMock.mock.calls.length).toBe(1)
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
