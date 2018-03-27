import React from "react";
import Component from "./Component/";

function App() {
    const blogPost1 = {
        title: "test",
        body: "lorem ipsum",
        postClass: "red"
    }

    return (
        <div>
            <Component {...blogPost1}></Component>

        </div>
    )
}

export default App;

// create a react app
// create an App Component
// create a Blog Component

//your blog component will be able to handle props with properties called title and body
// display that data in the form of a <h3> and <p> tag.