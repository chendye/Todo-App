/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'
import Morearty from 'morearty'
import TodoActions from '../actions/TodoActions'

const CreateTodo = React.createClass({
    mixins : [Morearty.Mixin],
    componentDidMount() {
        //this.refs.createTodo.getDOMNode().focus();
        console.log('mounted...');
    },

    _handleCreate(e) {
        let content = e.target.value;

        if(content) {
            TodoActions.create(content);
        }
        e.target.value = '';
    },

    render() {
        return (
            <header>
                <Morearty.DOM.input className="content-create"
                                    ref="createTodo"
                                    type="text"
                                    placeholder="请输入内容并按回车键保存"
                                    onKeyDown={ Morearty.Callback.onEnter(this._handleCreate) }/>
            </header>
        )
    }
});

export default CreateTodo