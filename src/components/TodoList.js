/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = React.createClass({
    getDefaultProps() {
        return {
            todos : []
        }
    },
    _handleTodoItemDeleted(todoId) {
        const {onTodoItemDeleted} = this.props;
        onTodoItemDeleted && onTodoItemDeleted(todoId);
    },
    render() {
        return (
            <article>
                <ul className="todo-list">
                    {
                        this.props.todos.map( todo =>
                            <TodoItem {...todo}
                            onDelTodoBtnClicked={this._handleTodoItemDeleted} /> )
                    }
                </ul>
            </article>
        )
    }
});

export default TodoList
