/**
 * Created by onlycrazy on 16/5/24.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import Toolbar from './ToolBar'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
    }
    _handleTodoItemDeleted(todoId) {
        const {todos} = this.state;
        const newTodos = todos.filter(function (todo) {
            return todo.id !== todoId
        });

        this.setState({
            todos : newTodos
        })
    }
    _handleTodoCreated(todo) {
        const {todos} = this.state;
        this.setState({
            todos : [...todos, todo]
        })
    }
    render() {
        let {todos} = this.state;
        return (
            <section className="todo-container">
                <CreateTodo onEnterKeyDown={this._handleTodoCreated.bind(this)} />
                <TodoList todos = {todos} onTodoItemDeleted={this._handleTodoItemDeleted.bind(this)} />
                <Toolbar />
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);