import mongoose from 'mongoose';

//Making a mongoose schema - specifying what each post should have:
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//Converting a schema into a model:
const PostMessage = mongoose.model('PostMessage', postSchema);
//exporting a mongoose model from postMessage file and on that model we will be able to run ocmmands(find, delete,..)
export default PostMessage;