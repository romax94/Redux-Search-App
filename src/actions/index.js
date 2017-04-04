export const itemsIsLoading = bool => {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
};

export const itemsHasErrored = bool => {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
};

export const fetchItemSuccess = data => {
    return {
        type: 'FETCH_ITEM_SUCCESS',
        data
    };
};

export const fetchItemsData = url => {
    return dispatch => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(fetchItemSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)))
    }
}
