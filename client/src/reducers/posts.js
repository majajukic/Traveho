import {FETCH_ALL, FETCH_BY_SEARCH, CREATE, DELETE, UPDATE, LIKE, START_LOADING, END_LOADING} from '../const/actionTypes.js';

//in reducers, state always has to be equal to something.Empty array for the posts in this case:
export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
              };//our actual posts.
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };//first we spread the posts,so we dont override previous data.
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };//output of map is an array!
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        case LIKE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };//we look through for a post that changed (action.payload) and return it
        default:
                return state;
    }
}