/**
 * Created by onlycrazy on 16/5/26.
 */
import Reflux from 'reflux'
import Immutable from 'immutable'
import TodoActions from '../actions/TodoActions'

function findBindIndex(id, itemsBinding) {
    return itemsBinding.get().findIndex(function (item) {
        return item.get('id') === id;
    });
}
function findItemBinding(id, itemsBinding) {
    return itemsBinding.sub(findBindIndex(id, itemsBinding));
}

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
                    editing : false,
                    hovered : false
                }));
            })
        },
        onEdit(id, editing) {
            const itemBinding = findItemBinding(id, this.itemsBinding);
            itemBinding.atomically().set('editing', editing).commit();
        },
        onDestroy(id) {
            const found = findBindIndex(id, this.itemsBinding);
            this.itemsBinding.delete(found);
        },
        onSave(id, content) {
            const itemBinding = findItemBinding(id, this.itemsBinding);
            itemBinding.atomically().set('content', content).set('editing', false).commit();
        },
        onToggleComplete(id, completed) {
            const itemBinding = findItemBinding(id, this.itemsBinding);
            itemBinding.atomically().set('completed', completed).commit();
        },
        onToggleCompleteAll(checked) {
            this.itemsBinding.update(function (items) {
                return items.map(function (item) {
                    return item.set('completed', checked);
                })
            })
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

