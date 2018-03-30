import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        //this is where you define static properties
        super(props);
        3
        this.incrementCounter = this.incrementCounter.bind(this);
        this.reset = this.reset.bind(this);
    }

    incrementCounter() {
        //tell react what the new state should look like
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        });
        // DONT DO THIS!!!!
        // this.state.counter = 1;
    }

    reset() {
        this.setState({
            counter: 0
        });
    }

    //this area defines methods
    render() {
        const { counter } = this.state;
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;