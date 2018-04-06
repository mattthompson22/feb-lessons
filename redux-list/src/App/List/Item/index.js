import React from "react";

function Item(props) {
    const { imgUrl, caption } = props;
    return (
        <div>
            <img style={{height: "100px", width: "auto"}}src={imgUrl} alt="" />
            <p>{caption}</p>
        </div>
    )
}

export default Item;