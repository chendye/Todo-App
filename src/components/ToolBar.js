/**
 * Created by onlycrazy on 16/5/25.
 */
import React from 'react'

const ToolBar = React.createClass({
    getDefaultProps(){
        return {
            done : 0,
            total : 0,
            selected : 'all'
        }
    },
    _select(selected, self) {
        return selected === self ? 'selected' : ''
    },
    _toggleCheckAll() {
        const {done, total, handleToggleCheckAll} = this.props;
        const readyToCheckAll = done !== total;
        handleToggleCheckAll && handleToggleCheckAll(readyToCheckAll);
    },
    _filterData(option) {
        const {onFilter} = this.props;
        onFilter && onFilter(option);
    },
    _handleClearCompleted(e) {
        const {onClearCompletedBtnClicked} = this.props;
        onClearCompletedBtnClicked && onClearCompletedBtnClicked();
    },
    render() {
        const {done, total, selected} = this.props;
        return (
            <footer style={{display : (total > 0 ? '' : 'none')}}>
                <input type="checkbox"
                       className="footer-item complete-all"
                       checked={done === total}
                       onClick={this._toggleCheckAll} />
                <span className="footer-item count">{`${done}done/${total}total`}</span>
                <ul className="footer-item filters">
                    <li><a onClick={this._filterData.bind(null, 'all')} href="#" className={this._select(selected, 'all')}>All</a></li>
                    <li><a onClick={this._filterData.bind(null, 'active')} href="#" className={this._select(selected, 'active')}>Active</a></li>
                    <li><a onClick={this._filterData.bind(null, 'completed')} href="#" className={this._select(selected, 'completed')}>Completed</a></li>
                </ul>
                <button style={{display : (done > 0 ? '' : 'none')}}
                        onClick={this._handleClearCompleted}
                        className="clear-completed">
                    Clear Completed
                </button>
            </footer>
        )
    }
});
/*
 ToolBar.defaultProps ={
 numbers : 0
 };*/

export default ToolBar