import React from 'react';
import Navigation from '../components/navigation.js';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('navigation', () => {
    it('renders without crashing', () => {
        const component = mount(<Navigation />);
        expect(component).toMatchSnapshot();
        });
})