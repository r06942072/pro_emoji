//Business Logic Layer
//What kind of data I have? (attribute)
//How to I process the data? (function)
import React, { Component } from 'react';
import Presentation from "./presentation"

class PlusMinus extends Component {
	constructor() {
		super()
		this.state = {
			count: 0,
		}
	}
	//method in the class
	plusClick = () => {
		this.setState(prevState => {
			return { count: prevState.count + 1 }
		})
	}
	minusClick = () => {
		this.setState(prevState => {
			return { count: prevState.count - 1 }
		})
	}
	render() {
		return (
			<Presentation 
				plusClick={this.plusClick}
				minusClick={this.minusClick}
				data={this.state}
			/>
		);
	}
}

export default PlusMinus;
