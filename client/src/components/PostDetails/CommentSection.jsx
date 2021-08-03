import React, {useState, useRef} from 'react';
import {Typography, TextField, Button, Grid, Divider, emphasize} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useDispatch} from 'react-redux';
import {commentPost} from '../../actions/posts.js';
import useStyles from './styles.js';

const CommentSection = ({post}) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");
    const [isDeleted, setDeleted] = useState(false);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const commentsRef = useRef();

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`
         const newComments = await dispatch(commentPost(finalComment, post._id)) //comment itself and the post that it belongs to

         setComments(newComments);
         setComment("");

         commentsRef.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments.map((c, i) => (
                            <Typography key={i} gutterBottom variant="subtitle1">
                                <strong>{c.split(": ")[0]}</strong>
                                {c.split(":")[1]}
                            </Typography>
                            /*{user?.result?.name === c.split(": ")[0] && (
                               <Button size="small" color="primary" className={classes.removeButton} onClick={handleDelete}>
                                    <HighlightOffIcon fontSize="medium"/>
                                </Button>
                            )}
                        </Grid>*/
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                <div style={{width:'70%'}}>
                    <Typography gutterBottom variant="h6">Write a comment</Typography>
                    <TextField 
                        fullWidth
                        rows={4}
                        variant="outlined"
                        label="Your comment..."
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button style={{marginTop:"10px", backgroundColor:"#3f51b5", color:"white"}} fullWidth disabled={!comment} variant="contained" onClick={handleClick}>COMMENT</Button>
                </div>
                )}
            </div>
        </div>
    )
}

export default CommentSection;
