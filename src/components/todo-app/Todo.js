import React, { Component } from 'react';

import Todos from './Todos'
import AddTodo from './AddTodo'

class Todo extends Component {
    state = {
        todos: [
            { id: 1, content: 'go to goolag' },
            { id: 2, content: 'go to goolag 2' },
        ]
    }

    deleteTodo = (id) => {
        // console.log(id);
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className="react-app container">
                <h1 className="center red-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}

export default Todo;