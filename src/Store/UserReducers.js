const initialState = []

const UserReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return state.concat([action.data]);
        break;
        case 'DELETE_USER':
            return state.filter((todo)=>todo.id !== action.id);
        break;
        default:
            return state;
    }
}

export default UserReducers;