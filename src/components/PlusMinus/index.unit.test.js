import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import PlusMinus from './';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });

describe('render a PlusMinus component', () => {
	it('render exist', () => {
		const wrapper = shallow(<PlusMinus />);

		expect(wrapper.exists()).toBe(true);
		//expect(wrapper.find('h1').text).toEqual('sss');
	});
});