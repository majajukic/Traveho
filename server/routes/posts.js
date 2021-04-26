import express from 'express';
/*since we are exporting more elements than one (not as default), we need a set of curly braces 
and we can use different syntax in those files for exporting*/
import {getPosts, createPost} from '../controllers/posts.js';

//Setting up the router:
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;