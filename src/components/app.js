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

    render() {
        let {todos} = this.state;
        return (
            <section class="todo-container">
                <CreateTodo />
                <TodoList todos = {todos} />
                <Toolbar />
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);