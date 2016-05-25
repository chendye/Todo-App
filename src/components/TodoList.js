/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
    }
    _handleTodoItemDeleted(todoId) {
        const {onTodoItemDeleted} = this.props;

        onTodoItemDeleted && onTodoItemDeleted(todoId);
    }
    render() {
        return (
            <article>
                <ul className="todo-list">
                    {
                        this.state.todos.map(function (todo) {
                            return <TodoItem {...todo}
                                onDelTodoBtnClicked={this._handleTodoItemDeleted.bind(this)} />
                        })
                    }
                </ul>
            </article>
        )
    }
}

export default TodoList
