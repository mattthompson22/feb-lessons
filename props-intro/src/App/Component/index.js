import React from "react";

function Component(props) {
    console.log(props);
    const { title, body, postClass } = props;
    return (
        <div className={postClass}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Component;