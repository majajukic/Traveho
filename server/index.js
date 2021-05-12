import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(express.json({limit: "30mb", extended: true}))//limit for images.
app.use(express.urlencoded({extended: true}));
app.use(cors());//this has to go above the routes.
app.use('/posts', postRoutes);//every route with postRoutes is going to start with 'posts'.

//Connection to the database:
//const CONNECTION_URL = 'mongodb+srv://majajukic:majajukic111@cluster0.4ask5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;//soft-coded port for the case of app deployment and hardcoded option.

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})//to prevent warnings in the console.
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
mongoose.set('useFindAndModify', false);//also prevents warnings in the console (not necessary).
