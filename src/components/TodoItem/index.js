import React, {Component} from 'react';
import './style.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isChecked: false,
    };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }
  //method in the class
  toggleCheckbox() {
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
      <div className={this.state.isChecked ? 'item-checked' : 'item-unchecked'}>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleCheckbox}
        />
        <p> {this.state.task} </p>
      </div>
    );
  }
}

export default TodoItem;
