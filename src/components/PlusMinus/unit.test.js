//PlusMinus
import React from 'react';
import { shallow, mount } from 'enzyme';
import PlusMinus from './';

describe('test suite of one react component', () => {
	//Compare shallow and mount
	const wrapper_shallow = shallow(<PlusMinus />);
	console.log("shallow:");
	console.log(wrapper_shallow.debug());
	let wrapper;
	beforeEach( () => {
		wrapper = mount(<PlusMinus />);
		console.log("mount:");
		console.log(wrapper.debug());	
	});
	//
	it('render exist', () => {
		expect(wrapper.exists()).toBe(true);
	});
	it('init state of count', () => {
		const text = wrapper.find('p').text();
		expect(text).toEqual('count is 0');
	});
	it('plus 1 when clicked', () => {
		
	});	
	it('minus 1 when clicked', () => {
		const button = wrapper.find('button');
		//button is a ReactWrapper {}
		console.log(button); 
		button.simulate('click');
		const text = wrapper.find('p').text();
		expect(text).toEqual('count is -1');
	});
});

