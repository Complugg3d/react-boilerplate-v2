import React from 'react';
import { shallow } from 'enzyme';
import DashboarPage from '../../components/DashboarPage';

test('should render DashboarPage component correctly', () => {
    const wrapper = shallow(<DashboarPage />);
    expect(wrapper).toMatchSnapshot();
});