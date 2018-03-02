let initialState = {
    users: [],
    filterText: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER':
            return {
                ...state,
                filterText: action.payload
            }
        case 'RECEIVE_USERS':
            return {
                ...state,
                users: action.data
            }
        case 'SORT_BY_ID':
            let sortById = state.users.sort((a, b) => a.id + b.id);
            return {
                ...state,
                users: sortById
            }
        default:
            return state;
    }
};