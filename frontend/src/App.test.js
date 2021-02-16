import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

describe('MyApp', () => {
  it('renders without crashing', () => {
    const component = mount(<MyApp />);
    expect(component).toMatchSnapshot();
  });

  it('has input textbox for book title', () => {
    const component = mount(<MyApp />);
    expect(component.exists('input#title')).toBe(true);
  });

  it('has input textbox for book author', () => {
    const component = mount(<MyApp />);
    expect(component.exists('input#author')).toBe(true);
  });

  it('has input textbox for book ISBN', () => {
    const component = mount(<MyApp />);
    expect(component.exists('input#ISBN')).toBe(true);
  });

  it('has input textbox for postcode', () => {
    const component = mount(<MyApp />);
    expect(component.exists('input#postcode')).toBe(true);
  });

  it('has input textbox for phone number', () => {
    const component = mount(<MyApp />);
    expect(component.exists('input#phone_number')).toBe(true);
  });

  it('has submit button', () => {
    const component = mount(<MyApp />);
    expect(component.exists('button#submit')).toBe(true);
  });

  it('has available books list', () => {
    const component = mount(<MyApp />);
    expect(component.exists('ul#books_list')).toBe(true);
  });

});
