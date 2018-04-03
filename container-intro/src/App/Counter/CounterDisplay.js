import React from "react";

function CounterDisplay(props) {
    const { counter, increment, reset } = props;
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterDisplay;