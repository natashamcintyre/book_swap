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

  it('Calls external api to get book details using isbn', () => {
    const component = mount(<BookMeUp />)
    component.find('input#ISBNSearch').simulate('change', { target: { value: 'test_ISBN' } })
    component.find('form#book_search').simulate('submit')
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
    expect(mockAxios.get.mock.calls[1][0]).toBe('https://openlibrary.org/api/books?bibkeys=ISBN:test_ISBN&format=json&jscmd=data')
  })

  it('Renders the title of the book from openlibrary in the BookForm Title field', async () => {
    const component = mount(<BookMeUp />)

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: { 'ISBN:test_ISBN': { title: 'test_title', authors: [{ name: 'test_author' }] } } }))

    component.find('input#ISBNSearch').simulate('change', { target: { value: 'test_ISBN' } })
    component.find('form#book_search').simulate('submit')

    await component.find('BookSearch')
    await component.update()
    await component.find('BookForm').update()

    await component.find('input#ISBN').update()
    expect(component.find('input#ISBN').props().defaultValue).toBe('test_ISBN')

    await component.find('input#title').update()
    expect(component.find('input#title').props().defaultValue).toBe('test_title')

    await component.find('input#author').update()
    expect(component.find('input#author').props().defaultValue).toBe('test_author')
  })

  it('renders without crashing', () => {
    const component = mount(<BookMeUp />)
    expect(component).toMatchSnapshot()
  })

  it('posts data and clears book form on submit success', async () => {
    const component = mount(<BookMeUp />)

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: { 'ISBN:test_ISBN': { title: 'test_title', authors: [{ name: 'test_author' }] } } }))

    component.find('input#ISBNSearch').simulate('change', { target: { value: 'test_ISBN' } })
    component.find('form#book_search').simulate('submit')

    await component.find('BookSearch')
    await component.update()
    await component.find('BookForm').update()

    await component.find('input#ISBN').update()
    await component.find('input#title').update()
    await component.find('input#author').update()

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

    expect(component.find('input#title').props().defaultValue).toEqual('')
    expect(component.find('input#author').props().defaultValue).toEqual('')
    expect(component.find('input#ISBN').props().defaultValue).toEqual('')
    expect(component.find('input#postcode').props().value).toEqual('')
    expect(component.find('input#phone_number').props().value).toEqual('')
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
