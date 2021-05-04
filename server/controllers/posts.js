/*inside of this folder we are creating all the handlers for our routes. Inside routes/posts.js we dont't want logic
because we are going to get lost eventually. So, in here, we can extract all the logic from our routes.*/
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

//find() is an asynchronous function, it takes time, so we add 'await'.
export const getPosts = async (req, res) => {
    try {
        const postMassages = await PostMessage.find();

        console.log(postMassages);

        res.status(200).json(postMassages);//200, everything went okay.
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;//this gathers data from the form and transfers it to the mongoose model to create a new post

    const newPost = new PostMessage(post)
    try {
        await newPost.save();

        res.status(201).json(newPost);//201, creation went okay.
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id.');

    await PostMessage.findByIdAndRemove(id);

    res.json({message:'Post deleted'});
}
