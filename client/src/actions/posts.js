import * as api from '../api';//import everything from actions as api.That means that I will be able to use fetchPosts like:

//Action creators:functions that return actions
//function that returns another async function (redux-thunk)
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();// {data} that we are returning from the backend.
        dispatch({type: 'FETCH_ALL', payload:data});//redux-thunk way of return.
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost =(post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({type: 'DELETE', payload: id});
    } catch(error) {
        console.log(error);
    }

}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);

        dispatch({type: 'LIKE', payload: data});

    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);//returns updated post.

        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}