import React from "react";

function App() {
    // const divStyles = {
    //     display: "flex", 
    //     justifyContent: "space-around"
    // }

    const today = new Date();
    const chosenClassName = today.getHours() < 17 ? "daytime" : "nighttime";

    return (
        <div>
            <h1 className={chosenClassName}>Number 1</h1>
            <h1>Number 2</h1>
        </div>
    )
}

export default App;