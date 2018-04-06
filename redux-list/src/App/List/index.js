import React from "react";
import { connect } from "react-redux";
import Item from "./Item/";

function List(props) {
    const catComponents = props.data.map((cat, i) => <Item key={cat.imgUrl + i}{...cat}></Item>)
    return (
        <div>
            {catComponents}
        </div>
    )
}

const mapStateToProps = state => {
    return state.cats;
}

export default connect(mapStateToProps, {})(List);