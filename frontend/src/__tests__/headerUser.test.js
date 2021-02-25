import React from 'react'
import HeaderUser from '../components/headerUser.js'
import { MemoryRouter } from 'react-router-dom'

describe('header', () => {
  it('renders without crashing', () => {
    const component = mount(
      <MemoryRouter>
        <HeaderUser />
      </MemoryRouter>
    )
    expect(component).toMatchSnapshot()
  })

  it('has a logo', () => {
    const component = mount(
      <MemoryRouter>
        <HeaderUser />
      </MemoryRouter>
    )
    expect(component.exists('img')).toBe(true)
  })
})
