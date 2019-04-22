//Presentation Layer, UI
//Display logic
import React from 'react'; //to handle JSX syntax

function PlusMinusComponent(props) {
    return (
        <div>
            <h1>{props.data.count}</h1>
			<button onClick={props.plusClick}> Puls one!! </button>
			<button onClick={props.minusClick}> Minus one!! </button>
        </div>
    );
}
export default PlusMinusComponent