import { combineReducers } from 'redux';
import { filter, users } from './items';

export default combineReducers({
    filter,
    users
});
