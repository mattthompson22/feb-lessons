import React from "react";

function Friend(props) {
    return (
        <div>
            <h1>Name: {props.human.name}</h1>
            <h3>Age: {props.human.age}</h3>
            <hr/>
        </div>
    )
}

export default Friend;