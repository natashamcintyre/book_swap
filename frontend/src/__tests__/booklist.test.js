import React from 'react';
import BookList from '../components/bookList';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('booklist', () => {


it('renders without crashing', () => {
    const component = mount(<BookList />);
    expect(component).toMatchSnapshot();
  });

  // it('has available books list', () => {
  //   const component = mount(<BookList />);
  //   expect(component.exists('ul#books_list')).toBe(true);
  // });

  it('takes books as props and displays them',() => {
    const component = shallow(<BookList
        books={[{title: 'testTitle', author: 'testAuthor'}]} />);
        expect(component.find('ul#books_list').children().length).toBe(2);
  });



  });
