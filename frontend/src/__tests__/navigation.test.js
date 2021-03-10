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
    const currentUser = { displayName: '' }
    const component = mount(
          <MemoryRouter>
            <Navigation currentUser={currentUser}/>
          </MemoryRouter>
    )
    expect(component).toMatchSnapshot()
  })

  it('logs out when log out link is clicked', () => {
    const currentUser = { displayName: '' }
    const logoutMock = jest.fn()
    const component = mount(
          <MemoryRouter>
            <Navigation logout={logoutMock} currentUser={currentUser}/>
          </MemoryRouter>
    )

    expect(component.find("a#logout_link").exists()).toBe(true)
    component.find("a#logout_link").simulate('click')
    expect(logoutMock.mock.calls.length).toBe(1)
  })
})
