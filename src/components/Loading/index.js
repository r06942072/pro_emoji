import React, { Component } from 'react';
import Presentation from "./presentation";

class Loading extends Component {
	constructor() {
		super()
		this.state = {
			isLoading: true,
		}
	}
	//lifecycle method
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 3000)
	}
	render() {
		return (
			<Presentation 
				data={this.state}
			/>
		);
	}
}

export default Loading;
