import React from 'react'
import ReactDOM from 'react-dom'
import BookMeUp from '../App'

import mockAxios from '../__mocks__/axios.js'
import errorMock from '../__mocks__/error.json'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

describe('BookMeUp', () => {
  beforeEach(() => {
    mockAxios.post.mockImplementation(() =>
    Promise.resolve({ data: [] }));

    mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: [] }));
  });

  afterEach(() => {
    mockAxios.post.mockClear()
    mockAxios.get.mockClear()
  })

  it('Loads data from api', () => {
    mount(<BookMeUp />);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('Calls external api to get book details using isbn', () => {
    const component = mount(<BookMeUp />)
    component.find('input#ISBNSearch').simulate('change', {
      target: { value: "test_ISBN" } })
    component.find('form#book_search').simulate('submit')
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
    expect(mockAxios.get.mock.calls[1][0]).toBe("https://openlibrary.org/isbn/test_ISBN.json")
  })

  it('Renders the title of the book from openlibrary', async () => {
    const component = mount(<BookMeUp />)

    mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: { title: "Sapiens" } }));

    component.find('input#ISBNSearch').simulate('change', {
      target: { value: 9780099590088 } })
    component.find('form#book_search').simulate('submit')

    await component.update()

    expect(component.find('#temp_title').text()).toBe('Sapiens');
  })

  // it('autopopulates title field with data from external api', () => {
  //   mockAxios.get.mockImplementation(() =>
  //     Promise.resolve({ data: { title: 'Test Title' } })
  //   )
  //   const component = mount(<BookMeUp />)
  //   component.find('input#ISBN').simulate('change', { // find the isbn (getBookDetails)
  //     target: { value: "test_ISBN" } })
  //   component.find('a#FindBook').simulate('click')
  //   expect(component.find('input#title').props().value).toEqual('Test Title') // return ${this.state.title}
  // })

  it('renders without crashing', () => {
    const component = mount(<BookMeUp />);
    expect(component).toMatchSnapshot();
  });

  it('posts data and clears book form on submit success', () => {
    const component = mount(<BookMeUp />);
    component.find('input#title').simulate('change', {
      target: { value: "test_title" } })
    component.find('input#author').simulate('change', {
      target: { value: "test_author" } })
    component.find('input#ISBN').simulate('change', {
      target: { value: "test_ISBN" } })
    component.find('input#postcode').simulate('change', {
      target: { value: "test_postcode" } })
    component.find('input#phone_number').simulate('change', {
      target: { value: "test_phone_number" } })
    component.find('form#book_form').simulate('submit')

    expect(mockAxios.post).toHaveBeenCalledWith("http://localhost:3001/add-book",
        { "title": "test_title",
        'author': 'test_author',
        'isbn': 'test_ISBN',
        'postcode': 'test_postcode',
        'phoneNumber': 'test_phone_number'});

    expect(component.find('input#title').props().value).toEqual('');
  })
});

describe('BookMeUp erroring', () => {
  beforeEach(function(){
    mockAxios.post.mockImplementation(() =>
    Promise.reject(errorMock))

    mockAxios.get.mockImplementation(() =>
    Promise.reject(errorMock))
  })

  afterEach(function(){
    mockAxios.post.mockClear()
    mockAxios.get.mockClear()
  })

  it('loads err on GET err', async () => {
    const component = await mount(<BookMeUp />);

    await component.update()
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(component.state().error).toEqual({"response": {"data": "error text from json mock"}});
    expect(component.find('#error').text()).toBe('Error: error text from json mock');
  });

  it('loads err on Post err', async () => {
    const component = mount(<BookMeUp/>);

    component.find('input#title').simulate('change', {
      target: { value: "" } })
    component.find('input#author').simulate('change', {
      target: { value: "" } })
    component.find('input#ISBN').simulate('change', {
      target: { value: "" } })
    component.find('input#postcode').simulate('change', {
      target: { value: "" } })
    component.find('input#phone_number').simulate('change', {
      target: { value: "" } })

    await component.find('form#book_form').simulate('submit')
    await component.update()
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(component.state().error).toEqual({"response": {"data": "error text from json mock"}});
    expect(component.find('#error').text()).toBe('Error: error text from json mock');
  })
})
