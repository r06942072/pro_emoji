//Presentation Layer, UI
//Display logic
import React from 'react'; //to handle JSX syntax

function Presentation(props) {
    return (
        <div>
            {props.data.isLoading ?
                <h4>Loading...</h4> :
                <h2>Completed</h2>}
        </div>
    );
}
export default Presentation