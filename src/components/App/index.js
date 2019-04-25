import React, { Component } from 'react';
import TodoItem from "../TodoItem/"
import PlusMinus from "../PlusMinus/"
import Loading from "../Loading/"
import Form from "../Form/"

class App extends Component {
	constructor() {
		super()
		this.state = {}
	}
	//method in the class
	//lifecycle method
	render() {
		return (
			<React.Fragment>
				<div>
					<p>Changing style when checked</p>
					<TodoItem task={"Learning React"} />
					<TodoItem task={"Cleaning Room"} />
				</div>
				<hr />
				<div>
					<p>Hey!!! Let's play plus and minus</p>
					<PlusMinus />
				</div>
				<hr />
				<div>
					<p>Conditional Rendering</p>
					<Loading />
				</div>
				<hr />
				<div>
					<p>Welcome to NAL airline. Plz fill out the form</p>
					<Form />
				</div>
				<hr />
			</React.Fragment>
		);
	}
}

export default App;
