import React from 'react';
import { shallow } from 'enzyme';
import FramedImage from './assets/components/FramedImage';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('FramedImage', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<FramedImage src="test.jpg" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('shows an error if src is missing', () => {
        const wrapper = shallow(<FramedImage />);
        expect(wrapper.text()).toContain('Error: Image source is missing');
    });
});
