//Form
import React from 'react'; //to handle JSX syntax

//We don't need to handle the state, so just use functional component instead of class component
//class FormComponent extends React.Component()
function Presentation(props) {
    return (
        <div>
            <form>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                    placeholder="Your First Name..."
                />
                <br />
                <input
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                    placeholder="Your Last Name..."
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                    </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                    </label>
                <br />
                <select
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange}
                >
                    <option value="">-- Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    /> Vegan?
                        </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                    /> Kosher?
                        </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                    /> Lactose free?
                        </label>
                <br />
                <button>Submit</button>
            </form>
            <h2>Entered info:</h2>
            <p>- My name is: {props.data.firstName} {props.data.lastName}</p>
            <p>- My gender is: {props.data.gender}</p>
            <p>- My destination is: {props.data.destination}</p>
            <p>- My dietary restrictions: </p>
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </div>
    );
}
export default Presentation