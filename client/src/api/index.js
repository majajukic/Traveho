import axios from 'axios';

//instance of axios that makes calls to different backend routes:
const API = axios.create({ baseURL:"http://localhost:5000" });

//a function that happens on each of the requests
API.interceptors.request.use((req) => {
    //sending token back to the backend to verify if we are logged in:
    if(localStorage.getItem("profile")) {
        req.headers.authorization  = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    //a must for interceptors! - to make it possible to make all the requests below!
    return req;
});

//API endpoints for posts:
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);//gets all the posts that we currently have in our database.
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.searchTerm || "none"}&tags=${searchQuery.tags}`);//?searchQuery is a query parameter
export const createPost = (newPost) => API.post("/posts", newPost);//creates a post.
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);//updates a post.
export const deletePost = (id) => API.delete(`posts/${id}`);//removes a post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);//likes a post
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, {value});//likes a post

//API endpoints for authenticaton:
export const singnIn = (formData) => API.post("/user/signin", formData);
export const singnUp = (formData) => API.post("/user/signup", formData);