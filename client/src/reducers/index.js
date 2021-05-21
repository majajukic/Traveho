import {combineReducers} from 'redux';
import posts from './posts.js';
import auth from './auth.js';

export default combineReducers({
    //all the individual reducers. Posts are used from posts.js in this folder as a default export!
    posts: posts,
    auth: auth
});