import express from 'express';
/*since we are exporting more elements than one (not as default), we need a set of curly braces 
and we can use different syntax in those files for exporting*/
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

//Setting up the router:
const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);//you need to be logged in to create a post (authorization)
router.patch("/:id", auth, updatePost);//a dynamic id to know what exactly to delete.
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);//patch request is a request for editing/changing sometnig. Only one like per user.

export default router;