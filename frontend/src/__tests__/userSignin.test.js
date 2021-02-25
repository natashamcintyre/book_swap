import React from 'react'
import UserSignin from '../components/userSignin.js'
import { MemoryRouter } from 'react-router-dom'

describe('user sign in form', () => {
  it('renders without crashing', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignin />
      </MemoryRouter>
    )
    expect(component).toMatchSnapshot()
  })

  // const component = mount(
  //   <MemoryRouter>
  //   <UserSignin />
  //   </MemoryRouter>
  // )

  it('has input textbox for username', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignin />
      </MemoryRouter>
    )
    expect(component.exists('input#signin_username')).toBe(true)
  })

  it('has input textbox for password', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignin />
      </MemoryRouter>
    )
    expect(component.exists('input#signin_password')).toBe(true)
  })

  it('has submit button', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignin />
      </MemoryRouter>
    )
    expect(component.exists('button#signin_submit')).toBe(true)
  })

  it('should update state username when text entered', () => {
    const component = shallow(<UserSignin.WrappedComponent />)
    component.find('input#signin_username').simulate('change', {
      target: { value: 'test_username' }
    })
    expect(component.state('username')).toEqual('test_username')
  })

  it('should update state password when text entered', () => {
    const component = shallow(<UserSignin.WrappedComponent />)
    component.find('input#signin_password').simulate('change', {
      target: { value: 'test_password' }
    })
    expect(component.state('password')).toEqual('test_password')
  })

  it('Clear message box on submit', () => {
    const component = mount(<UserSignin.WrappedComponent signinUser={ function (item) { return true }} history={[]} />)
    component.find('input#signin_username').simulate('change', {
      target: { value: 'test_username' }
    })
    component.find('input#signin_password').simulate('change', {
      target: { value: 'test_password' }
    })
    component.find('form#user_signin_form').simulate('submit')

    expect(component.find('input#signin_username').props().value).toEqual('')
    expect(component.state('username')).toEqual('')
  })
})
