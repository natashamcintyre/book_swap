import React from 'react'
import UserSignup from '../components/userSignup.js'

import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('user sign up form', () => {
  it('renders without crashing', () => {
    const component = mount(<UserSignup />)
    expect(component).toMatchSnapshot()
  })

  it('has input textbox for username', () => {
    const component = mount(<UserSignup />)
    expect(component.exists('input#new_username')).toBe(true)
  })

  it('has input textbox for email', () => {
    const component = mount(<UserSignup />)
    expect(component.exists('input#new_email')).toBe(true)
  })

  it('has input textbox for location', () => {
    const component = mount(<UserSignup />)
    expect(component.exists('input#new_location')).toBe(true)
  })

  it('has input textbox for password', () => {
    const component = mount(<UserSignup />)
    expect(component.exists('input#new_password')).toBe(true)
  })

  it('has input textbox for passwordCheck', () => {
    const component = mount(<UserSignup />)
    expect(component.exists('input#new_passwordCheck')).toBe(true)
  })

  it('has submit button', () => {
    const component = mount(<UserSignup />)
    expect(component.exists('button#new_user_submit')).toBe(true)
  })

  it('should update state username when text entered', () => {
    const component = mount(<UserSignup />)
    component.find('input#new_username').simulate('change', {
      target: { value: 'test_username' }
    })
    expect(component.state('username')).toEqual('test_username')
  })

  it('should update state email when text entered', () => {
    const component = mount(<UserSignup />)
    component.find('input#new_email').simulate('change', {
      target: { value: 'test@email' }
    })
    expect(component.state('email')).toEqual('test@email')
  })

  it('should update state location when text entered', () => {
    const component = mount(<UserSignup />)
    component.find('input#new_location').simulate('change', {
      target: { value: 'test_location' }
    })
    expect(component.state('location')).toEqual('test_location')
  })

  it('should update state password when text entered', () => {
    const component = mount(<UserSignup />)
    component.find('input#new_password').simulate('change', {
      target: { value: 'test_password' }
    })
    expect(component.state('password')).toEqual('test_password')
  })

  it('should update state password when text entered', () => {
    const component = mount(<UserSignup />)
    component.find('input#new_passwordCheck').simulate('change', {
      target: { value: 'test_password' }
    })
    expect(component.state('passwordCheck')).toEqual('test_password')
  })

  it('Clear input box on submit', () => {
    const component = mount(<UserSignup addUser={ function (item) { return true } } />)
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

  it('Does not clear username/email/location if signup did not work', () => {
    const component = mount(<UserSignup addUser={ function (item) { return false } } />)
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

    expect(component.find('input#new_username').props().value).toEqual('test_username')
    expect(component.state('username')).toEqual('test_username')
  })

  it('Clears password fields if signup did not work', () => {
    const component = mount(<UserSignup addUser={ function (item) { return false } } />)
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
