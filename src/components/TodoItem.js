/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'

class TodoItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            status : ''
        }
    }

    _handleDelBtnClick(todoId, e) {
        const {onDelTodoBtnClicked} = this.props;
        onDelTodoBtnClicked && onDelTodoBtnClicked(todoId);
    }
    render() {
        const {content, id} = this.props;
        return (
            <li class="todo-item">
                <div class="view">
                    <input type="checkbox" title="done" onChange={} />
                    <label>{content}</label>
                    <button class="delete"
                            onClick={this._handleDelBtnClick.bind(null, id)} />
                </div>
                <input class="edit" type="text" />
            </li>
        )
    }
}

export default TodoItem
