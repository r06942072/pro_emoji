import React, { Component } from 'react';
import TodoItem from "../TodoItem"
//import ContactCard from "../ContactCard"

class App extends Component {
	constructor() {
		super()
		this.state = {
			count: 0
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
	render() {
		return (
			<React.Fragment>
				<div className="todo-list">
	      			<TodoItem />
	      			<TodoItem />
	    		</div> 
				<hr />
        		<div className="state">
  		  			<h1>{this.state.count}</h1>
					<button onClick={this.plusClick}> Puls one!! </button>
					<button onClick={this.minusClick}> Minus one!! </button>
				</div>
				<hr />

			</React.Fragment>
		);
	}
}

export default App;
