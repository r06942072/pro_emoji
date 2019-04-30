import React from 'react';
import { shallow } from 'enzyme';
import PlusMinus from './';

describe('render a PlusMinus component', () => {
	it('render exist', () => {
		const wrapper = shallow(<PlusMinus />);

		expect(wrapper.exists()).toBe(true);
		//expect(wrapper.find('h1').text).toEqual('sss');
	});
});