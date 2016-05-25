/**
 * Created by onlycrazy on 16/5/24.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import Toolbar from './ToolBar'

const App = React.createClass({
    getInitialState() {
        return {
            todos : []
        }
    },
    _handleTodoItemDeleted(todoId) {
        const {todos} = this.state;
        const newTodos = todos.filter(function (todo) {
            return todo.id !== todoId
        });

        this.setState({
            todos : newTodos
        })
    },
    _handleTodoCreated(todo) {
        const {todos} = this.state;
        this.setState({
            todos : [...todos, todo]
        })
    },
    render() {
        let {todos} = this.state;
        return (
            <section className="todo-container">
                <CreateTodo onEnterKeyDown={this._handleTodoCreated} />
                <TodoList todos = {todos} onTodoItemDeleted={this._handleTodoItemDeleted} />
                <Toolbar />
            </section>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);