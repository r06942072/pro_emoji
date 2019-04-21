import React, { Component } from 'react';
import TodoItem from "../TodoItem"
import ContactCard from "../ContactCard"

class App extends Component {
  render() {
	return (
	  <React.Fragment>
        <div className="todo-list">
	      <TodoItem />
	      <TodoItem />
	    </div> 
        <div className="contact-card">
          <ContactCard 
			name="John"
			phone="(240)521-1111"
		    email="abcde@gmail.com"  
		  />
          <ContactCard 
			name="Susan"
			phone="(240)333-1111"
		    email="susan@gmail.com"  
  		  />
        </div>
	  </React.Fragment>
    );
  }
}

export default App;
