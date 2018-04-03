import React, { Component } from "react";

import FormDisplay from "./FormDisplay";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                firstName: "",
                lastName: "",
                email: ""
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
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <FormDisplay {...props}></FormDisplay>
        )
    }
}

export default Form;