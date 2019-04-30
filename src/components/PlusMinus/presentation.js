//PlusMinus
import React from 'react'; //to handle JSX syntax
import * as MyCSS from './style';

function Presentation(props) {
    return (
        <div>
            <p>count is {props.data.count}</p>
            <MyCSS.Button
                onClick={props.plusClick}
                count={props.data.count}
            >
                Plus one
            </MyCSS.Button>
            <button
                onClick={props.minusClick}>
                Minus one
            </button>
        </div>
    );
}
export default Presentation;