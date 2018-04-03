import React, { Component } from "react";

import CounterDisplay from "./CounterDisplay";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            counter: 0
        }
        this.state = this.initialState;

        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    reset() {
        this.setState(prevState => {
            return this.initialState;
        })
    }
    render() {
        const { counter } = this.state;
        const props = {
            counter,
            reset: this.reset,
            increment: this.increment
        }
        return (
            <CounterDisplay {...props} />
        )
    }
}

export default Counter;