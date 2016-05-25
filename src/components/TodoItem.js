/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import DOMUtil from '../utils/dom'
const TodoItem = React.createClass({
    getInitialState() {
        return {
            status : '',
            isHovered : false
        }
    },

    _handleDelBtnClick(todoId, e) {
        let stopPropagation = e.stopPropagation || e.cancelBubble;
        stopPropagation.call(e);
        const {onDelTodoBtnClicked} = this.props;
        onDelTodoBtnClicked && onDelTodoBtnClicked(todoId);
    },
    _handleCompletedCheckboxClicked(todoId, e) {
        let status = e.target.checked ? 'completed' : '';
        const stopPropagation = e.stopPropagation||e.cancelBubble;
        stopPropagation.call(e);
        const {onCompletedToggle} = this.props;
        onCompletedToggle && onCompletedToggle(todoId);
        this.setState({status});
    },
    _handleTodoItemClicked(id, e) {
        const {status} = this.state;
        if ( status !== 'completed' && status !== 'editing' ) {
            this.setState({
                status : 'editing'
            });
            setTimeout(()=> DOMUtil.setFocus(this.refs.edit) ,0);
        }
    },
    _handleEnterKeyDown(id, e) {
        if (e.charCode !== 13) return false;
        this._handleSave(id, e);
    },
    _handleSave(id,e ) {
        const content = e.target.value;
        const {onSave} = this.props;
        this.setState({status : ''});
        onSave && onSave({content, id});
    },
    _toggleHover(e) {
        let {isHovered} = this.state;
        this.setState({isHovered : !isHovered});
    },
    render() {
        const {content, id} = this.props;
        const {status, isHovered} = this.state;
        return (
            <li className={`todo-item ${status}`}
                onMouseOver={this._toggleHover}
                onMouseOut={this._toggleHover}
                onClick={this._handleTodoItemClicked.bind(this, id)}>
                <div className="view">
                    <input type="checkbox"
                           title="done"
                           onClick={this._handleCompletedCheckboxClicked.bind(this, id)} />
                    <label>{content}</label>
                    <button className="delete" style={{display : (isHovered ? '' : 'none')}}
                            onClick={this._handleDelBtnClick.bind(this, id)}>
                        x
                    </button>
                </div>
                <input className="edit" defaultValue={content} type="text"
                       ref="edit"
                       onBlur={this._handleSave.bind(this, id)}
                       onKeyPress={this._handleEnterKeyDown.bind(this, id)} />
            </li>
        )
    }
});

export default TodoItem
