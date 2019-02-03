import { createStore, combineReducers } from 'redux';
import TodoReducers from './TodoReducers';
import UserReducers from './UserReducers';

const reducers = combineReducers({
    todo: TodoReducers,
    user: UserReducers
})
const store = createStore(reducers);

export default store;