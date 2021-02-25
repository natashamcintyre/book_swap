import React from 'react'
import HeaderUserNew from '../components/headerUserNew.js'
import { MemoryRouter } from 'react-router-dom'

describe('header', () => {
  it('renders without crashing', () => {
    const component = mount(
      <MemoryRouter>
        <HeaderUserNew />
      </MemoryRouter>
    )
    expect(component).toMatchSnapshot()
  })

  it('has a logo', () => {
    const component = mount(
      <MemoryRouter>
        <HeaderUserNew />
      </MemoryRouter>
    )
    expect(component.exists('img')).toBe(true)
  })
})
