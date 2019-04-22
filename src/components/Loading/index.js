import React, { Component } from 'react';
import presentation from "./presentation"

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
		}, 1500)
	}
	render() {
		return (
			<presentation 
				data={this.state}
			/>
		);
	}
}

export default Loading;
