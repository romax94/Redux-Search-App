import { combineReducers } from 'redux';
import { filter, list } from './items';

export default combineReducers({
    filter,
    list
});
