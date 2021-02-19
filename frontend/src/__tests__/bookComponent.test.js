import React from 'react';
import BookContainer from '../components/bookContainer';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('bookContainer', () => {


it('renders without crashing', () => {
    const component = mount(<BookContainer book={[{title: 'testTitle', author: 'testAuthor', id: 'a', isbn: '999', postcode: 'test postcode', phoneNumber: '0857366366'}]}/>);
    expect(component).toMatchSnapshot();
  });

  it('takes books as props and displays them',() => {
    const component = mount(<BookContainer
        book={[{title: 'testTitle', author: 'testAuthor', id: 'a', isbn: '999', postcode: 'test postcode', phoneNumber: '0857366366'}]} />);
        expect(component.find('li').children().length).toBe(4);
  });



  });