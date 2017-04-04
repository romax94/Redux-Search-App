import axios from 'axios';

export const fetchData = users => {
    return dispatch => {
        return axios.post('./api/data.json')
    }
}
