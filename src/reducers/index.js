import { combineReducers } from 'redux';
import { filter, list, fetchData } from './items';

export default combineReducers({
    filter,
    list,
    fetchData
});
