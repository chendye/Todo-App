/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'

const ToolBar = React.createClass({
    getDefaultProps(){
        return {
            done : 0,
            total : 0
        }
    },
    render() {
        const {done, total} = this.props;
        return (
            <footer style={{display : (total > 0 ? '' : 'none')}}>
                <input type="checkbox" className="footer-item complete-all" />
                <span className="footer-item count">{`${done}done/${total}total`}</span>
                <ul className="footer-item filters">
                    <li><a href="#">All</a></li>
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Completed</a></li>
                </ul>
                <button style={{display : (done > 0 ? '' : 'none')}} className="clear-completed">Clear Completed</button>
            </footer>
        )
    }
});
/*
 ToolBar.defaultProps ={
 numbers : 0
 };*/

export default ToolBar