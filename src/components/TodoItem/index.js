import React, { Component } from 'react';
import Presentation from './presentation'
import './style.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isChecked: false,
    };
  }
  //method in the class
  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }
  /*
	//Only be called one time. Another way to setState instead of using constructor
	componentDidMount() {
		this.setState({
        	task: this.props.task
         });
	}
	*/
  render() {
    //console.log('TodoItem render: ' + this.state.isChecked);
    return (
			<Presentation
				data={this.state}
        handleChange={this.handleChange}
			/>
    );
  }
}

export default TodoItem;
