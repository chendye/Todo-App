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
    _handleCompletedCheckboxClicked(todoId, e) {
        let status = e.target.checked ? 'completed' : '';
        this.setState({status});
    }
    render() {
        const {content, id} = this.props;
        const {status} = this.state;
        return (
            <li className={"todo-item " + status}>
                <div className="view">
                    <input type="checkbox"
                           title="done"
                           onClick={this._handleCompletedCheckboxClicked.bind(null, id)} />
                    <label>{content}</label>
                    <button className="delete"
                            onClick={this._handleDelBtnClick.bind(null, id)} />
                </div>
                <input className="edit" type="text" />
            </li>
        )
    }
}

export default TodoItem
