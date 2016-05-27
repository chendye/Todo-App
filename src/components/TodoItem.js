/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Morearty from 'morearty'
import TodoActions from '../actions/TodoActions'
import DOMUtil from '../utils/dom'
const TodoItem = React.createClass({
    mixins : [Morearty.Mixin],

    componentDidUpdate() {
        const ctx = this.getMoreartyContext();
        if (ctx.isChanged(this.getDefaultBinding().sub('editing'))) {
            const editDom = ReactDOM.findDOMNode(this.refs.edit);
            DOMUtil.setFocus(editDom);
        }
    },
    _handleEdit(id) {
        TodoActions.edit(id, true);
    },
    _getTheItemStatus(completed, editing) {
        if (completed) {
            return 'completed';
        }else if(editing) {
            return 'editing';
        }else return '';
    },
    _handleToggleComplete(e) {
        const completed = e.target.checked,
            id = this.getDefaultBinding().get('id');
        TodoActions.toggleComplete(id, completed);
    },
    _handleSave(e) {
        const id = this.getDefaultBinding().get('id'),
            content = e.target.value;
        TodoActions.save(id, content);
    },
    render: function() {
        const todoItem = this.getDefaultBinding().get();
        const id = todoItem.get('id'),
            content = todoItem.get('content'),
            completed = todoItem.get('completed'),
            editing = todoItem.get('editing'),
            hovered = todoItem.get('hovered');
        return (
            <li className={`todo-item ${this._getTheItemStatus(completed, editing)}`}>
                <div className="view">
                    <Morearty.DOM.input type="checkbox"
                                        title="done"
                                        checked={completed}
                                        onChange={this._handleToggleComplete}/>
                    <label onClick={this._handleEdit.bind(null,id)}>{content}</label>
                    <button className="delete"
                            onClick={TodoActions.destroy.bind(null, id)}>
                        x
                    </button>
                </div>
                <Morearty.DOM.input className="edit" defaultValue={content} type="text"
                                    onKeyDown={Morearty.Callback.onEnter(this._handleSave)}
                                    onBlur={TodoActions.edit.bind(null, id, false)}
                                    ref='edit'/>
            </li>
        )
    }
});

export default TodoItem
