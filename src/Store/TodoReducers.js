const initialState = []

const TodoReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([action.data]);
        break;
        case 'DELETE_TODO':
            return state.filter((todo)=>todo.id !== action.id);
        break;
        default:
            return state;
    }
}

export default TodoReducers;