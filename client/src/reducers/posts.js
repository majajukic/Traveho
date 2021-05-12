import {FETCH_ALL, CREATE, DELETE, UPDATE, LIKE} from '../const/actionTypes.js';
//in reducers, state always has to be equal to something.Empty array for the posts in this case:
export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;//our actual posts.
        case CREATE:
            return [...posts, action.payload];//first we spread the posts,so we dont override previous data.
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);//output of map is an array!
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);//we look through for a post that changed (action.payload) and return it
        default:
            return posts;
    }
}