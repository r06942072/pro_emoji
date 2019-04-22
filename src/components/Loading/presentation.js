//Presentation Layer, UI
//Display logic
import React from 'react'; //to handle JSX syntax

function presentation(props) {
    return (
        <div>
            <p>sss</p>
            {props.data.isLoading ?
                <h1>Loading...</h1> :
                <h1>Loading completed</h1>}
        </div>
    );
}
export default presentation