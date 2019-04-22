import React, { Component } from 'react';
import TodoItem from "../TodoItem"
import Conditional from "../Conditional"
//import ContactCard from "../ContactCard"

class App extends Component {
	constructor() {
		super()
		this.state = {
			count: 0,
			//
			isLoading: true,
			//
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
		this.plusClick = this.plusClick.bind(this)
		this.minusClick = this.minusClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	//method in the class
	plusClick() {
		this.setState(prevState => {
			return { count: prevState.count + 1 }
		})
	}
	minusClick() {
		this.setState(prevState => {
			return { count: prevState.count - 1 }
		})
	}
	handleChange(event) {
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
					<TodoItem task={"Learning React"} />
					<TodoItem task={"Cleaning Room"} />
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
						<Conditional />}
				</div>
				<hr />
				<div>
					<p>Form Practice</p>
					<form>
						<input
							name="firstName"
							value={this.state.firstName}
							onChange={this.handleChange}
							placeholder="Your First Name..."
						/>
						<br />
						<input
							name="lastName"
							value={this.state.lastName}
							onChange={this.handleChange}
							placeholder="Your Last Name..."
						/>
						<br />
						<label>
							<input
								type="radio"
								name="gender"
								value="male"
								checked={this.state.gender === "male"}
								onChange={this.handleChange}
							/> Male
						</label>
						<br />
						<label>
							<input
								type="radio"
								name="gender"
								value="female"
								checked={this.state.gender === "female"}
								onChange={this.handleChange}
							/> Female
						</label>
						<br />
						<select
							name="destination"
							value={this.state.destination}
							onChange={this.handleChange}
						>
							<option value="">-- Choose a destination --</option>
							<option value="germany">Germany</option>
							<option value="north pole">North Pole</option>
							<option value="south pole">South Pole</option>
						</select>
						<br />
						<label>
							<input
								type="checkbox"
								name="isVegan"
								checked={this.state.isVegan}
								onChange={this.handleChange}
							/> Vegan?
							</label>
						<br />
						<label>
							<input
								type="checkbox"
								name="isKosher"
								checked={this.state.isKosher}
								onChange={this.handleChange}
							/> Kosher?
							</label>
						<br />
						<label>
							<input
								type="checkbox"
								name="isLactoseFree"
								checked={this.state.isLactoseFree}
								onChange={this.handleChange}
							/> Lactose free?
							</label>
						<br />
						<button>Submit</button>
					</form>
					<h2>Entered info:</h2>
					<p>- My name is: {this.state.firstName} {this.state.lastName}</p>
					<p>- My gender is: {this.state.gender}</p>
					<p>- My destination is: {this.state.destination}</p>
					<p>- My dietary restrictions: </p>
					<p>Vegan: {this.state.isVegan? "Yes": "No"}</p>
					<p>Kosher: {this.state.isKosher? "Yes": "No"}</p>
					<p>Lactose Free: {this.state.isLactoseFree? "Yes": "No"}</p>
					
				</div>
				<hr />
			</React.Fragment>
		);
	}
}

export default App;
