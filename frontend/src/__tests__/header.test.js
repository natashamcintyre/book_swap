import React from 'react';
import Header from '../components/header.js';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('header', () => {
    it('renders without crashing', () => {
        const component = mount(<Header />);
        expect(component).toMatchSnapshot();
        });
})