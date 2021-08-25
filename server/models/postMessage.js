import mongoose from 'mongoose';

//Making a mongoose schema - specifying what each post should have:
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  comments: {
    type: [
      {
        id: Number,
        comment: String,
      },
    ],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Converting a schema into a model:
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;