//Presentation Layer, UI
//Display logic
import React from 'react'; //to handle JSX syntax
//import { Wrapper } from '../style'
import * as MyCSS from '../App/style';

function Presentation(props) {
    let isLoading = props.data.isLoading;
    return (
        <MyCSS.Wrapper 
            isLoading={isLoading}
        >
            <div>
                {isLoading ?
                <p>Loading...</p> :
                <p>Completed</p>}
            </div>
        </MyCSS.Wrapper>
    );
}

export default Presentation;