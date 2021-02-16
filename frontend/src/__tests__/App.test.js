import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from '../App';

import mockAxios from '../__mocks__/axios.js'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

describe('MyApp', () => {
  beforeEach(() => {
    mockAxios.post.mockImplementation(() =>
    Promise.resolve({ data: [] }));
  });

  afterEach(() => {
    mockAxios.post.mockClear()
  })

  it('renders without crashing', () => {
    const component = mount(<MyApp />);
    expect(component).toMatchSnapshot();
  });

  it('has available books list', () => {
    const component = mount(<MyApp />);
    expect(component.exists('ul#books_list')).toBe(true);
  });

  it('posts data and clears book form on submit success', () => {
    const component = mount(<MyApp />);
    component.find('input#title').simulate('change', {
      target: { value: "test_title" } })
    // component.find('input#author').simulate('change', {
    //   target: { value: "test_author" } })
    // component.find('input#ISBN').simulate('change', {
    //   target: { value: "test_ISBN" } })
    // component.find('input#postcode').simulate('change', {
    //   target: { value: "test_postcode" } })
    // component.find('input#phone_number').simulate('change', {
    //   target: { value: "test_phone_number" } })
    component.find('form').simulate('submit')

    expect(mockAxios.post).toHaveBeenCalledWith("http://localhost:3001/message", {"content": "test_title"});

    expect(component.instance().refs.bookFormRef.state.currentBook).toEqual('');

  })

});
