import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        const { firstName, lastName, email } = this.state.inputs;
        console.log(this.state.inputs);
        return (
            <form >
                <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Enter First Name" />
                <input name="lastName" onChange={this.handleChange} value={lastName} type="text" placeholder="Enter Last Name" />
                <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@Email" />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;