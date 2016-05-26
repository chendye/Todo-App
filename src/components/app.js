/**
 * Created by onlycrazy on 16/5/24.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Morearty from 'morearty'
import Reflux from 'reflux'
import configureStore from '../store/TodoStore'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import Toolbar from './ToolBar'

const state = {
    filter : 'all',
    items : [{
        id : new Date().getTime() + 2016,
        content : 'first task...',
        completed : false,
        editing : false
    }]
};
const Ctx = Morearty.createContext(state, {}, {});
configureStore(Ctx);

const App = React.createClass({
    displayName : 'App',
    mixins : [Morearty.Mixin],
    render() {
        const binding = this.getDefaultBinding();
        return (
            <section className="todo-container">
                <CreateTodo binding={binding} />
                <TodoList binding={binding} />
                <Toolbar binding={binding} />
            </section>
        )
    }
});

var Bootstrap = Ctx.bootstrap(App);

ReactDOM.render(
    <Bootstrap />,
    document.getElementById('app')
);