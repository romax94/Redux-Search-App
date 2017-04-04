const initialData = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};


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


export const fetchData = (state = initialData, action) => {
    switch (action.type) {
        case 'FETCH_USER_START':
            return {
                ...state,
                fetching: true
            };
        case 'FETCH_USER_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case 'RECEIVE_USER':
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload
            }
        default:
            return state;
    }
}

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
