export const itemsIsLoading = bool => {
    return {
        type: '',
        isLoading: bool
    }
};

export const itemsIsError = bool => {
    return {
        type: '',
        isError: bool
    }
};

export fetchItemSuccess = data => {
    return {
        type: '',
        data
    }
};
