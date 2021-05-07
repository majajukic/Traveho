import express from 'express';
/*since we are exporting more elements than one (not as default), we need a set of curly braces 
and we can use different syntax in those files for exporting*/
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

//Setting up the router:
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);//a dynamic id to know what exactly to delete.
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);//patch request is a request for editing/changing sometnig.

export default router;