import React from "react";
import Component from "./Component/";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            blogPost1: {
                title: "1",
                body: "2",
                postClass: "blah"
            }
        }
    }

    render() {
        return (
            <div>
                <Component blogPost={this.state.blogPost1} />
            </div>
        )
    }
    
}

export default App;

// create a react app
// create an App Component
// create a Blog Component

//your blog component will be able to handle props with properties called title and body
// display that data in the form of a <h3> and <p> tag.