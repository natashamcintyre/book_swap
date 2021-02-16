import React from 'react';
import ReactDOM from 'react-dom';
import BookMeUp from '../BookMeUp';

import mockAxios from '../__mocks__/axios.js'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

describe('BookMeUp', () => {
  beforeEach(() => {
    mockAxios.post.mockImplementation(() =>
    Promise.resolve({ data: [] }));
  });

  afterEach(() => {
    mockAxios.post.mockClear()
  })

  it('renders without crashing', () => {
    const component = mount(<BookMeUp />);
    expect(component).toMatchSnapshot();
  });

  it('posts data and clears book form on submit success', () => {
    const component = mount(<BookMeUp />);
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

    expect(mockAxios.post).toHaveBeenCalledWith("http://localhost:3001/add-book", {"content": "test_title"});

    expect(component.instance().refs.bookFormRef.state.currentTitle).toEqual('');

  })

});
