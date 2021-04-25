import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json({limit: "30mb", extended: true}))//limit for images
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get((req, res) => {
    res.send("Hello!");
});

app.listen(3000, () =>{
    console.log("Server running at port 3000");
});