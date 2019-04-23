//Presentation Layer, UI
//Display logic
import React from 'react'; //to handle JSX syntax

function Presentation(props) {
    return (
      <div className={props.data.isChecked ? 'item-checked' : 'item-unchecked'}>
        <input
          type="checkbox"
          checked={props.data.isChecked}
          onChange={props.handleChange}
        />
        <p> {props.data.task} </p>
      </div>
    );
}
export default Presentation