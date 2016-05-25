/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import TodoItem from 'TodoItem'

class TodoList extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
    }

    render() {
        return (
            <article>
                <ul className="todo-list">
                    {
                        this.state.todos.map(function (todo) {
                            return <TodoItem {...todo} />
                        })
                    }
                </ul>
            </article>
        )
    }
}

export default TodoList
