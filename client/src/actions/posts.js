import {FETCH_ALL, FETCH_BY_SEARCH, CREATE, DELETE, UPDATE, LIKE, START_LOADING, END_LOADING} from '../const/actionTypes.js';
import * as api from '../api/index.js';//import everything from actions as api.That means that I will be able to use fetchPosts like:

//Action creators:functions that return actions
//function that returns another async function (redux-thunk)
export const getPosts = (page) => async (dispatch) => {
    try {

        dispatch({type: START_LOADING});

        const {data} = await api.fetchPosts(page);// {data} that we are returning from the backend.
        //console.log(data);

        dispatch({type: FETCH_ALL, payload:data});//redux-thunk way of return.

        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {

        dispatch({type: START_LOADING});

        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
        
        dispatch({type: FETCH_BY_SEARCH, payload:data});

        dispatch({type: END_LOADING});

        
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost =(post) => async (dispatch) => {
    try {

        dispatch({type: START_LOADING});

        const {data} = await api.createPost(post);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    } catch(error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);

        dispatch({type: LIKE, payload: data});

    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);//returns updated post.

        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
};