const initialState = []

const TodoReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return state.concat([action.data]);
        break;
        case 'DELETE_TODO':
            return state.filter((todo)=>todo.id !== action.id);
        break;
        case 'UPDATE_TODO':
            let results=[...state]
            let findId
            findId = state.findIndex((obj => obj.id === action.todo.id ))
            if (findId >= 0){
                results[findId]=action.todo
            }else{
                results=[...results,action.todo]
            }
            return results
        break;
        default:
            return state;
    }
}

export default TodoReducers;