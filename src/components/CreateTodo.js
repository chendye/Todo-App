/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }
    _handleFormChange(e) {
        this.setState({
            content : e.target.value
        })
    }
    _handleEnterKeyDown(e) {
        let {onEnterKeyDown} = this.props,
            id = new Date().getTime() + 2016,
            {content} = this.state;
        if (e.keycode == 13) {
            onEnterKeyDown && onEnterKeyDown({content, id});
        }
    }

    render() {
        return (
            <header>
                <input class="content-create"
                       type="text"
                       placeholder="请输入内容并按回车键保存"
                       onChange={this.handleFormChange}
                       onKeydown={this.handleEnterKeyDown}
                       value={this.state.content} />
            </header>
        )
    }
}

export default CreateTodo