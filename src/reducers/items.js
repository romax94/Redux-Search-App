let initialState = {
    users: [],
    filterText: '',
    activeUser: []
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
        default:
            return state;
    }
};