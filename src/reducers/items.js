const initialList = [
    {
        id: 1,
        name: 'Bob'
    },
    {
        id: 2,
        name: 'Rich'
    },
    {
        id: 3,
        name: 'Ryan'
    }
];

export const filter = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
            return action.payload;
        default:
            return state;
    }
};

export const list = (state = initialList, action) => {
    switch (action.type) {
        case 'LIST':
            return state;
        default:
            return state;
    }
};
