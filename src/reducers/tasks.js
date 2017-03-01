export default function tasks(state = [], action) {
    if(action.type === 'ADD_TASKS') {
        return [
            ...state,
            action.payload
        ]
    } else if(action.type === 'DELETE_TASKS') {
        return state;
    }
    return state;
};
