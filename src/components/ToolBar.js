/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import Morearty from 'morearty'
import TodoActions from '../actions/TodoActions'


const ToolBar = React.createClass({
    mixins : [Morearty.Mixin],

    _handleToggleCompleteAll(e) {
        TodoActions.toggleCompleteAll(e.target.checked);
    },
    render() {
        const filterBy = TodoActions.filterBy;
        const filter = this.getDefaultBinding().sub('filter').get(),
            itemsBinding = this.getDefaultBinding().sub('items'),
            immutableItems = itemsBinding.get();

        const done = immutableItems.filter(function (item, index) {
            return item.get('completed');
        }).size;
        const total = immutableItems.size;
        return (
            <footer style={{display : (total > 0 ? '' : 'none')}}>
                <Morearty.DOM.input type="checkbox"
                       className="footer-item complete-all"
                       checked={done === total}
                       onChange={this._handleToggleCompleteAll} />
                <span className="footer-item count">{`${done} completed/${total} total`}</span>
                <ul className="footer-item filters">
                    <li><a onClick={filterBy.bind(TodoActions, 'all')} href="#" className={filter === 'all' ? 'selected' : ''}>All</a></li>
                    <li><a onClick={filterBy.bind(TodoActions, 'active')} href="#" className={filter === 'active' ? 'selected' : ''}>Active</a></li>
                    <li><a onClick={filterBy.bind(TodoActions, 'completed')} href="#" className={filter === 'completed' ? 'selected' : ''}>Completed</a></li>
                </ul>
                <button style={{display : (done > 0 ? '' : 'none')}}
                        onClick={TodoActions.clearCompleted}
                        className="clear-completed">
                    Clear Completed
                </button>
            </footer>
        )
    }
});
/*
 ToolBar.defaultProps ={
 numbers : 0
 };*/

export default ToolBar