import React, { Component } from 'react';
import TodoItem from "../TodoItem"
import Conditional from "../Conditional"
//import ContactCard from "../ContactCard"

class App extends Component {
	constructor() {
		super()
		this.state = {
			count: 0,
			isLoading: true
		}
		this.plusClick = this.plusClick.bind(this)
		this.minusClick = this.minusClick.bind(this)
	}
	//method in the class
	plusClick() {
		this.setState(prevState => {
			return {count: prevState.count + 1}
		})
	}
	minusClick() {
		this.setState(prevState => {
			return {count: prevState.count - 1}
		})
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
			<React.Fragment>
				<div className="todo-list">
  		  			<p>Changing style when checked</p>
	      			<TodoItem task={"Learning React"}/>
	      			<TodoItem task={"Cleaning Room"}/>
	    		</div> 
				<hr />
        		<div className="state">
  		  			<h1>{this.state.count}</h1>
					<button onClick={this.plusClick}> Puls one!! </button>
					<button onClick={this.minusClick}> Minus one!! </button>
				</div>
				<hr />
        		<div>
  		  			<p>Conditional Rendering</p>
					{this.state.isLoading ?
					<h1>Loading...</h1> :
					<Conditional />	}
				</div>
				<hr />
				<div>
					
				</div>
				<hr />
			</React.Fragment>
		);
	}
}

export default App;
