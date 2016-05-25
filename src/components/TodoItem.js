/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'

const TodoItem = React.createClass({
    getInitialState() {
        return {
            status : ''
        }
    },

    _handleDelBtnClick(todoId, e) {
        const {onDelTodoBtnClicked} = this.props;
        onDelTodoBtnClicked && onDelTodoBtnClicked(todoId);
    },
    _handleCompletedCheckboxClicked(todoId, e) {
        let status = e.target.checked ? 'completed' : '';
        this.setState({status});
    },
    _handleTodoItemClicked(id, e) {
        const {status} = this.state;
        if ( status !== 'completed' || status !== 'editing' ) {
            this.setState({
                status : 'editing'
            })
        }

    },
    render() {
        const {content, id} = this.props;
        const {status} = this.state;
        return (
            <li className={`todo-item ${status}`} onClick={this._handleTodoItemClicked.bind(this, id)}>
                <div className="view">
                    <input type="checkbox"
                           title="done"
                           onClick={this._handleCompletedCheckboxClicked.bind(this, id)} />
                    <label>{content}</label>
                    <button className="delete"
                            onClick={this._handleDelBtnClick.bind(this, id)} />
                </div>
                <input className="edit" type="text" />
            </li>
        )
    }
});

export default TodoItem
