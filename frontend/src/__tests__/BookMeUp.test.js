import React from 'react';
import ReactDOM from 'react-dom';
import BookMeUp from '../App';

import mockAxios from '../__mocks__/axios.js'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

describe('BookMeUp', () => {
  beforeEach(() => {
    mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: [] }));
    mockAxios.post.mockImplementation(() =>
    Promise.resolve({ data: [] }));
  });

  afterEach(() => {
    mockAxios.post.mockClear()
  })

  it('Loads data from api', () => {
    mount(<BookMeUp />);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

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
    component.find('form').simulate('submit')

    expect(mockAxios.post).toHaveBeenCalledWith("http://localhost:3001/add-book",
        { "title": "test_title",
        'author': 'test_author',
        'isbn': 'test_ISBN',
        'postcode': 'test_postcode',
        'phone_number': 'test_phone_number'});

    expect(component.instance().refs.bookFormRef.state.currentTitle).toEqual('');

  })



});
