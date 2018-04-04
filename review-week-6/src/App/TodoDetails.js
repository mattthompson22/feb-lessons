import React from "react";
import axios from "axios";

class TodoDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.todoId;
        axios.get(`https://api.vschool.io/bob/todo/${id}`)
            .then(response => {
                this.setState({
                    todo: response.data
                })
            });
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.todo.completed}/>
                <h1>{this.state.todo.title}</h1>
                <h3>${this.state.todo.price}</h3>
                <p>{this.state.todo.description}</p>
            </div>
        )
    }

}

export default TodoDetails;