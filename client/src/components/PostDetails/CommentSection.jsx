import React, {useState, useRef} from 'react';
import {Typography, TextField, Button, Card, Grid} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useDispatch} from 'react-redux';
import {commentPost, deleteComment} from '../../actions/posts.js';
import useStyles from './styles.js';

const CommentSection = ({post}) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");
    //const [isDeleted, setDeleted] = useState(false);
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

    const handleDelete = async (c) => {
        if(window.confirm('Are you sure you want to delete this comment?')) {
            const newComments = await dispatch(deleteComment(c.id, post._id));

            setComments(newComments);
        }
        
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments.length === 0 ? <Typography>No comments yet.</Typography> :
                     comments.map((c, i) => (
                     <Grid key={i} container direction="row" alignItems="center">
                        <Card className={classes.cardContent}>
                            <Typography gutterBottom variant="subtitle1">
                                    <strong>{c.comment.split(": ")[0]}</strong>
                                    {c.comment.split(":")[1]}
                            </Typography>
                            {user?.result?.name === c.comment.split(": ")[0] && (
                                <Button size="small" color="primary" className={classes.removeButton} onClick={() => handleDelete(c)}>
                                        <HighlightOffIcon fontSize="medium"/>
                                </Button>
                            )}
                            {user?.result?.role === "admin" && (
                                <Button size="small" color="primary" className={classes.removeButton} onClick={() => handleDelete(c)}>
                                        <HighlightOffIcon fontSize="medium"/>
                                </Button>
                            )}
                        </Card>
                    </Grid>
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
