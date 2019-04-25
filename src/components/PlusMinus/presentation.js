//Presentation Layer, UI
//Display logic
import React from 'react'; //to handle JSX syntax
import * as MyCSS from './style';

function Presentation(props) {
    return (
        <div>
            <h1>count = {props.data.count}</h1>
            <MyCSS.Button 
                onClick={props.plusClick}
                count={props.data.count}
            > 
                Puls one!! 
            </MyCSS.Button>
            <button onClick={props.minusClick}> Minus one!! </button>
        </div>
    );
}
export default Presentation