/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'

const CreateTodo = React.createClass({
    getInitialState() {
        return {
            content : ''
        }
    },
    _handleFormChange(e) {
        this.setState({
            content : e.target.value
        })
    },
    _handleEnterKeyDown(e) {
        console.info(e);
        if (e.charCode != 13) return false;
        let {onEnterKeyDown} = this.props,
            id = new Date().getTime() + 2016,
            {content} = this.state;
        onEnterKeyDown && onEnterKeyDown({content, id, isCompleted : false});
        this.setState({content : ''});
    },
    render() {
        return (
            <header>
                <input className="content-create"
                       type="text"
                       placeholder="请输入内容并按回车键保存"
                       onChange={this._handleFormChange}
                       onKeyPress={this._handleEnterKeyDown}
                       value={this.state.content} />
            </header>
        )
    }
});

export default CreateTodo