/**
 * Created by onlycrazy on 16/5/26.
 */
import Reflux from 'reflux'
import Immutable from 'immutable'
import TodoActions from '../actions/TodoActions'

export default function configureStore(maCtx) {
    Reflux.StoreMethods.getMoreartyContext = function () {
        return maCtx;
    };

    return Reflux.createStore({
        listenables : [TodoActions],
        init() {
            this.rootBinding = this.getMoreartyContext().getBinding();
            this.itemsBinding = this.rootBinding.sub('items');
            this.filterBinding = this.rootBinding.sub('filter');
        },
        onCreate(content) {
            this.itemsBinding.update(function (todos) {
                return todos.unshift(Immutable.Map({
                    id : new Date().getTime() + 2016,
                    content,
                    completed : false,
                    editing : false
                }));
            })
        },
        onEdit() {

        },
        onDestroy() {

        },
        onToggleCompleted() {

        },
        onToggleCompleteAll() {

        },
        onClearCompleted() {
            this.itemsBinding.update(function (items) {
                return items.filter(function (todo, index) {
                    return !todo.get('completed')
                })
            })
        },
        onFilterBy(filter) {
            this.filterBinding.set(filter);
        }
    });
}

