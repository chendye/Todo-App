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
    _handleTodoItemSave(todo) {
        const {todos} = this.state;
        const found = todos.findIndex(function (item, index) {
            return item.id === todo.id;
        });
        const newTodos = [
            ...todos.slice(0, found),
            todo,
            ...todos.slice(found + 1)
        ];
        this.setState({todos : newTodos});
    },
    render() {
        let {todos} = this.state;
        return (
            <section className="todo-container">
                <CreateTodo onEnterKeyDown={this._handleTodoCreated} />
                <TodoList todos = {todos}
                          onTodoItemSave={this._handleTodoItemSave}
                          onTodoItemDeleted={this._handleTodoItemDeleted} />
                <Toolbar />
            </section>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);