import React from 'react'
import BookMeUp from '../App'

import mockAxios from '../__mocks__/axios.js'
import errorMock from '../__mocks__/error.json'
import Enzyme, { mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('BookMeUp', () => {
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

  it('Loads data from api', () => {
    mount(<BookMeUp />)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })

  it('renders without crashing', () => {
    const component = mount(<BookMeUp />)
    expect(component).toMatchSnapshot()
  })

  it('posts data and clears book form on submit success', () => {
    const component = mount(<BookMeUp />)
    component.find('input#title').simulate('change', { target: { value: 'test_title' } })
    component.find('input#author').simulate('change', { target: { value: 'test_author' } })
    component.find('input#ISBN').simulate('change', { target: { value: 'test_ISBN' } })
    component.find('input#postcode').simulate('change', { target: { value: 'test_postcode' } })
    component.find('input#phone_number').simulate('change', { target: { value: 'test_phone_number' } })
    component.find('form#book_form').simulate('submit')

    expect(mockAxios.post).toHaveBeenCalledWith('http://localhost:3001/add-book',
      {
        title: 'test_title',
        author: 'test_author',
        isbn: 'test_ISBN',
        postcode: 'test_postcode',
        phoneNumber: 'test_phone_number'
      })

    expect(component.find('input#title').props().value).toEqual('')
  })
})

describe('BookMeUp erroring', () => {
  beforeEach(function () {
    mockAxios.post.mockImplementation(() =>
      Promise.reject(errorMock))

    mockAxios.get.mockImplementation(() =>
      Promise.reject(errorMock))
  })

  afterEach(function () {
    mockAxios.post.mockClear()
    mockAxios.get.mockClear()
  })

  it('loads err on GET err', async () => {
    const component = await mount(<BookMeUp />)

    await component.update()
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(component.state().error).toEqual({ response: { data: 'error text from json mock' } })
    expect(component.find('#error').text()).toBe('Error: error text from json mock')
  })

  it('loads err on Post err', async () => {
    const component = mount(<BookMeUp/>)

    component.find('input#title').simulate('change', { target: { value: '' } })
    component.find('input#author').simulate('change', { target: { value: '' } })
    component.find('input#ISBN').simulate('change', { target: { value: '' } })
    component.find('input#postcode').simulate('change', { target: { value: '' } })
    component.find('input#phone_number').simulate('change', { target: { value: '' } })

    await component.find('form#book_form').simulate('submit')
    await component.update()
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(component.state().error).toEqual({ response: { data: 'error text from json mock' } })
    expect(component.find('#error').text()).toBe('Error: error text from json mock')
  })
})
