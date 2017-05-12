import { combineReducers } from 'redux';
import { filter, users, sort } from './items';

export default combineReducers({
    filter,
    users,
    sort
});
