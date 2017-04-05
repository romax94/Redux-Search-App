export const filter = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
            return action.payload;
        default:
            return state;
    }
};

export const users = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_USERS':
            return action.data
        default:
            return state;
    }
}
