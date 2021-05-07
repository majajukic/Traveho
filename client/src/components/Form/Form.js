import React, { useState, useEffect } from "react";
import {TextField, Button, Typography, Paper, Card, CardMedia,} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";

const Form = ({currentId, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //fetch a new post. Finding the post with the same id as the one we want to edit and returning it:
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    massage: "",
    tags: "",
    selectedFile: "",
  });

  //filling up the form with data of the post we want to edit:
  useEffect(() => {
    if(post) {
      setPostData(post);
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
    //if a post is choosen to be edited...
    if(currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      massage: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Edit" : "Share"} your trip</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator || ""} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title || ""} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline value={postData.message || ""} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags || ""} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })}/>
        </div>
        {postData.selectedFile && (
          <img
            src={postData.selectedFile}
            alt={postData.title}
            className={classes.previewImage}
          />
        )}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>SUBMIT</Button>
        <Button className={classes.buttonClear} variant="contained" color="secondary" size="large" onClick={clear} fullWidth> CLEAR</Button>
      </form>
    </Paper>
  );
};

export default Form;
