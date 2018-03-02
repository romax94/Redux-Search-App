export const users = data => {
    return {
        type: 'RECEIVE_USERS',
        data
    }
};

export const fetchData = url => {
    return (dispatch, getState) => {
        fetch(url)
            .then(response => response.json())
            .then(data => dispatch(users(data)))
    }
};