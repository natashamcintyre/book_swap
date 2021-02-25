import React from 'react'
import UserSignup from '../components/userSignup.js'
import { MemoryRouter } from 'react-router-dom'

describe('user sign up form', () => {
  // beforeEach(() => {
  //   const component = mount(
  //     <MemoryRouter>
  //       <UserSignup />
  //     </MemoryRouter>
  //   )
  // })

  // it('renders without crashing', () => {
  //   component = mount(
  //   <MemoryRouter>
  //     <Signup />
  //   </MemoryRouter>
  // )
  //   expect(component).toMatchSnapshot()
  // })

  // component = mount(
  //   <MemoryRouter>
  //     <PollDetails />
  //   </MemoryRouter>
  // )

  it('has input textbox for username', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignup />
      </MemoryRouter>
    )
    expect(component.exists('input#new_username')).toBe(true)
  })

  it('has input textbox for email', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignup />
      </MemoryRouter>
    )
    expect(component.exists('input#new_email')).toBe(true)
  })

  it('has input textbox for location', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignup />
      </MemoryRouter>
    )
    expect(component.exists('input#new_location')).toBe(true)
  })

  it('has input textbox for password', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignup />
      </MemoryRouter>
    )
    expect(component.exists('input#new_password')).toBe(true)
  })

  it('has input textbox for passwordCheck', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignup />
      </MemoryRouter>
    )
    expect(component.exists('input#new_passwordCheck')).toBe(true)
  })

  it('has submit button', () => {
    const component = mount(
      <MemoryRouter>
      <UserSignup />
      </MemoryRouter>
    )
    expect(component.exists('button#new_user_submit')).toBe(true)
  })

  // below this line fails

  it('should update state username when text entered', () => {
    const component = shallow(<UserSignup.WrappedComponent />)
    component.find('input#new_username').simulate('change', {
      target: { value: 'test_username' }
    })
    expect(component.state('username')).toEqual('test_username')
  })

  it('should update state email when text entered', () => {
    const component = shallow(<UserSignup.WrappedComponent />)
    component.find('input#new_email').simulate('change', {
      target: { value: 'test@email' }
    })
    expect(component.state('email')).toEqual('test@email')
  })

  it('should update state location when text entered', () => {
    const component = shallow(<UserSignup.WrappedComponent />)
    component.find('input#new_location').simulate('change', {
      target: { value: 'test_location' }
    })
    expect(component.state('location')).toEqual('test_location')
  })

  it('should update state password when text entered', () => {
    const component = shallow(<UserSignup.WrappedComponent />)
    component.find('input#new_password').simulate('change', {
      target: { value: 'test_password' }
    })
    expect(component.state('password')).toEqual('test_password')
  })

  it('should update state password when text entered', () => {
    const component = shallow(<UserSignup.WrappedComponent />)
    component.find('input#new_passwordCheck').simulate('change', {
      target: { value: 'test_password' }
    })
    expect(component.state('passwordCheck')).toEqual('test_password')
  })

  it('Clear input box on submit', () => {
    const component = mount(<UserSignup.WrappedComponent addUser={ function (item) { return true } } history={[]} />)
    component.find('input#new_username').simulate('change', {
      target: { value: 'test_username' }
    })
    component.find('input#new_email').simulate('change', {
      target: { value: 'test@email' }
    })
    component.find('input#new_location').simulate('change', {
      target: { value: 'test_location' }
    })
    component.find('input#new_password').simulate('change', {
      target: { value: 'test_password' }
    })
    component.find('input#new_passwordCheck').simulate('change', {
      target: { value: 'test_password' }
    })
    component.find('form#new_user_form').simulate('submit')

    expect(component.find('input#new_username').props().value).toEqual('')
    expect(component.state('username')).toEqual('')
  })

  it('Clears password fields if signup did not work', () => {
    const component = mount(<UserSignup.WrappedComponent addUser={ function (item) { return false } } history={[]} />)
    component.find('input#new_username').simulate('change', {
      target: { value: 'test_username' }
    })
    component.find('input#new_email').simulate('change', {
      target: { value: 'test@email' }
    })
    component.find('input#new_password').simulate('change', {
      target: { value: 'test_password' }
    })
    component.find('input#new_passwordCheck').simulate('change', {
      target: { value: 'test_password' }
    })
    component.find('form#new_user_form').simulate('submit')

    expect(component.find('input#new_password').props().value).toEqual('')
    expect(component.state('password')).toEqual('')
    expect(component.find('input#new_passwordCheck').props().value).toEqual('')
    expect(component.state('passwordCheck')).toEqual('')
  })
})
