import React, { Component } from "react";
import List from "./List/";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                //we can use props to set initial state if we want to:
                firstName: props.firstName || "",
                lastName: props.lastName || "",
                email: props.email || ""
            },
            people: []
        }
        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //take the value from the input, and set state accordingly
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    //we need prev state so that we can include all the values that we HAVENT changed:
                    ...prevState.inputs,
                    // change the ONE value we do want to change:
                    [name]: value
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                //reset the form inputs back to their original state, and include the new object in the array
                inputs: this.initialState.inputs,
                people: [...prevState.people, prevState.inputs]
            }
        });
    }

    render() {
        const { firstName, lastName, email } = this.state.inputs;
        const { people } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Enter First Name" />
                <input name="lastName" onChange={this.handleChange} value={lastName} type="text" placeholder="Enter Last Name" />
                <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@Email" />
                <button>Submit</button>
                {/* render a list component, pass into it via props this.state.people, map through each item, and render a person component containing individual info */}
                <List people={people}></List>
            </form>
        )
    }
}

export default Form;