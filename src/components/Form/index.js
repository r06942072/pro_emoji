//Business Logic Layer
//What kind of data I have? (attribute)
//How to I process the data? (function)
import React, { Component } from 'react';
import FormComponent from "./FormComponent"

class Form extends Component {
	constructor() {
		super()
		this.state = {
			firstName: "",
			lastName: "",
			gender: "", //radio button
			destination: "", //drop down list
			//dietaryRestrictions:
			isVegan: false,
			isKosher: false,
			isLactoseFree: false
			//checkboxes
		}
	}
	//method in the class
	handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		type === "checkbox" ?
			this.setState({
				[name]: checked
			})
			:
			this.setState({
				[name]: value
			})
		/*
		Condition? True: False
		if (type === "checkbox"){}
		else{}
		*/
	}
	render() {
		return (
			<FormComponent
				handleChange={this.handleChange}
				data={this.state}
			/>
		);
	}
}

export default Form;
