import React, { Component } from "react";

import { connect } from "react-redux";
import { getPlanets } from "../../redux/planets.js";

import PlanetItem from "./PlanetItem/";

class PlanetList extends Component {
    componentDidMount() {
        this.props.getPlanets();
    }

    render() {
        const { data, loading, errMsg } = this.props;
        const planetComponents = data.map((planet, i) => <PlanetItem key={planet.name + i} {...planet}></PlanetItem>)
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {planetComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.planets;
}

export default connect(mapStateToProps, { getPlanets })(PlanetList);

//the connect function is how react is able to interact with redux

// it lets us access parts of the global state in the component
//  it also lets us dispatch actions from the component

//everything is accessable via props
import store from "../../redux/index.js";
const connect = (mapStateToProps, actionCreators) => {
    // we are going to extract what we need from the state
    // we will get any action creators that we need
    // tell them to be dispatched when called
    const dispatchedActionCreators = {};
    for (let key in actionCreators) {
        dispatchedActionCreators[key] = (...args) => store.dispatch(actionCreators[key].apply(null, ...args))
    }

    //combine them into a props object
    const props = { ...mapStateToProps(store.getState()), ...dispatchedActionCreators}
    return (ReactComponent) => {
        // return the component, with props added
        return <ReactComponent {...props} />
    }
} 
