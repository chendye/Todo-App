/**
 * Created by onlycrazy on 16/5/26.
 */
import Reflux from 'reflux'

const TodoActions = Reflux.createActions([
    'create',
    'edit',
    'destroy',
    'save',
    'toggleComplete',
    'toggleCompleteAll',
    'clearCompleted',
    'filterBy'
]);

export default TodoActions