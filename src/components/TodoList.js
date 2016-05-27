/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import Morearty from 'morearty'
import TodoItem from './TodoItem'

const TodoList = React.createClass({
    mixins : [Morearty.Mixin],
    _shouldShow(todoItem) {
        const filterBinding = this.getDefaultBinding().get('filter');
        switch (filterBinding) {
            case 'active':
                return !todoItem.completed;
            case 'completed':
                return todoItem.completed;
            case 'all':
            default:
                return true;
        }
    },

    _renderTodoItems() {
        const itemsBinding = this.getDefaultBinding().sub('items');
        const items = itemsBinding.get();
        return items.map( (todo, index) => {
            var itemBinding = itemsBinding.sub(index);
            return this._shouldShow(todo) ? <TodoItem binding={itemBinding} key={itemBinding.toJS('id')} /> : null;
        }).toArray();
    },
    render() {
        return (
            <article>
                <ul className="todo-list">
                    { this._renderTodoItems() }
                </ul>
            </article>
        )
    }
});

export default TodoList
