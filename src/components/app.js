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
    _handleTodoItemCompletedToggle(todoId) {
        let todos = [...this.state.todos];
        let newTodos = todos.map((todo, index) => {
            if (todo.id === todoId) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        this.setState({
            todos : newTodos
        });
    },
    _countAll() {
        return this.state.todos.length;
    },
    _countCompleted() {
        return this.state.todos.filter((todo, index) => {
            return todo.isCompleted;
        }).length;
    },
    render() {
        let {todos} = this.state;
        return (
            <section className="todo-container">
                <CreateTodo onEnterKeyDown={this._handleTodoCreated} />
                <TodoList todos = {todos}
                          onTodoCompletedToggle={this._handleTodoItemCompletedToggle}
                          onTodoItemSave={this._handleTodoItemSave}
                          onTodoItemDeleted={this._handleTodoItemDeleted} />
                <Toolbar done={this._countCompleted()} total={this._countAll()} />
            </section>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);