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
    render() {
        let {todos} = this.state;
        return (
            <section class="todo-container">
                <CreateTodo />
                <TodoList todos = {todos} onTodoItemDeleted={} />
                <Toolbar />
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);