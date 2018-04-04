import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import TodoList from "./TodoList";
import TodoDetails from "./TodoDetails";

function App(props) {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/todos" component={TodoList}/>
                <Route path="/todos/:todoId" component={TodoDetails}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;