import React, { useState, useEffect } from "react";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import {defaultImage} from "../../const/defaultImage";

const Form = ({currentId, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //extracting the user from a local storage:
  const user = JSON.parse(localStorage.getItem("profile"));

  //fetch a new post. Finding the post with the same id as the one we want to edit and returning it:
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const [errors, setErrors] = useState({});

  //filling up the form with data of the post we want to edit:
  useEffect(() => {
    if(post) {
      setPostData(post);
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validate()) {
      //if a post is choosen to be edited...
      if(currentId) {
        dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
      } else {
        if (!postData.selectedFile) {
          postData.selectedFile = defaultImage;
          
          dispatch(createPost({...postData, name: user?.result?.name}));
        }
        else {
          dispatch(createPost({...postData, name: user?.result?.name}));
        }
      }
      clear();
    }
  }

  //if no user is logged in, insetad of a form show message:
  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">You must be signed in to create posts and like other posts!</Typography>
      </Paper>
    )
  }

  //validation function:
  const validate = () => {
    const temp = {};
    temp.title = postData.title ? "" : "This field is required";
    temp.titleFailed = postData.title ? false : true;
    temp.message = postData.message ? "" : "This field is required";
    temp.messageFailed = postData.message ? false : true;
    setErrors({
      ...temp
    });

    return Object.values(temp).every(x => (x === "" || x === false));//every() da li svi elementi niza zadovoljavaju validaciju.
  }

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setErrors({});
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Edit" : "Share"} your trip</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth error={errors.titleFailed} helperText={errors.title} value={postData.title || ""} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
        <TextField name="message" variant="outlined" label="Message" fullWidth error={errors.messageFailed} helperText={errors.message} multiline value={postData.message || ""} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
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
