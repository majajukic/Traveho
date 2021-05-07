import axios from 'axios';

//point to our backend route:
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);//gets all the posts that we currently have in our database.
export const createPost = (newPost) => axios.post(url, newPost);//creates a post.
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);//updates a post.
export const deletePost = (id) => axios.delete(`${url}/${id}`);//removes a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);//likes a post