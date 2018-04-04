import React, { Component } from "react";


function Person(name, age) {
    this.name = name;
    this.age = age;
}

const morgan = new Person("Morgan", 42);



<Counter />

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.reset = this.reset.bind(this);
    }

    incrementCounter() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        });
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
                <h1>{this.props.name}</h1>
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;