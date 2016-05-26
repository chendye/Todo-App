/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import Morearty from 'morearty'
import DOMUtil from '../utils/dom'
const TodoItem = React.createClass({
    mixins : [Morearty.Mixin],
    _handleTodoItemClicked(id, e) {
        const {status} = this.state;
        if ( status !== 'editing' ) {
            this.setState({
                status : 'editing'
            });
            setTimeout(()=> DOMUtil.setFocus(this.refs.edit) ,0);
        }
    },
    _toggleHover(e) {
        //let {isHovered} = this.state;
        //this.setState({isHovered : !isHovered});
    },
    _getTheItemStatus(completed, editing) {
        if (completed) {
            return 'completed';
        }else if(editing) {
            return 'editing';
        }else return '';
    },
    render() {
        const todoItem = this.getDefaultBinding().get();
        const id = todoItem.get('id'),
            content = todoItem.get('content'),
            completed = todoItem.get('completed'),
            editing = todoItem.get('editing');
        const isHovered = false;
        return (
            <li className={`todo-item ${this._getTheItemStatus(completed, editing)}`}
                onMouseOver={this._toggleHover}
                onMouseOut={this._toggleHover}
                onClick={this._handleTodoItemClicked.bind(this, id)}>
                <div className="view">
                    <Morearty.DOM.input type="checkbox"
                           title="done"
                           checked={completed}/>
                    <label>{content}</label>
                    <button className="delete" style={{display : (isHovered ? '' : 'none')}}>
                        x
                    </button>
                </div>
                <Morearty.DOM.input className="edit" defaultValue={content} type="text"
                       ref="edit"/>
            </li>
        )
    }
});

export default TodoItem
