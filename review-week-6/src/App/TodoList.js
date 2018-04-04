import React from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

class ContactsList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/bob/todo").then(response => {
            this.setState({todos: response.data});
        });
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <h1>
                    <Link to={`/todos/${todo._id}`}>{todo.title}</Link>
                </h1>
            )
        });

        return (
            <div>
                {todos}
            </div>
        )
    }
}

export default ContactsList;