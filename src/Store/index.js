import { createStore } from 'redux';
import TodoReducers from './TodoReducers';

const store = createStore(TodoReducers);

export default store;