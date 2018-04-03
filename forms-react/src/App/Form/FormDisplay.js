import React from "react";

import List from "./List/";

function FormDisplay(props) {
    const { handleChange, handleSubmit, inputs, people } = props;
    const { firstName, lastName, email } = inputs;
    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" onChange={handleChange} value={firstName} type="text" placeholder="Enter First Name" />
            {firstName.length ? <p>You're doing a great job!</p> : <p style={{ color: "red" }}> Name is required!</p>}
            <input name="lastName" onChange={handleChange} value={lastName} type="text" placeholder="Enter Last Name" />
            {!lastName.length && <p style={{ color: "red" }}>Last Name is required!</p>}
            <input name="email" onChange={handleChange} value={email} type="email" placeholder="@Email" required />
            <button>Submit</button>
            <List people={people}></List>
        </form >
    )
}

export default FormDisplay;

let something = true && 0;

console.log(something)