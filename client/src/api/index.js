import axios from 'axios';

//point to our backend route:
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);//gets all the posts that we currently have in our database
export const createPost = (newPost) => axios.post(url, newPost)