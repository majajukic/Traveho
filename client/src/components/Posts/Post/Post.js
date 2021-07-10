import React from 'react';
import useStyles from './styles.js';
import{Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
//import Posts from '../Posts.js';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts.js';

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));

    //likes subcomponent to monitor likes easier:
    const Likes = () => {
      if (post?.likes?.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="large" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlined fontSize="large" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpAltOutlined fontSize="large" />&nbsp;</>;
    };

    const handleClickDelete = () => {
        if(window.confirm('Are you sure you want to delete this item?'))
            dispatch(deletePost(post._id));

    }

    const handleClickLike = () => {
        dispatch(likePost(post._id));
    }

    return(
        <Card className={classes.card} raised elevation={6}>
            <CardMedia className={classes.media} title={post.title} image={post.selectedFile} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <Button className={classes.dots} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
                )}
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
            <Typography variant="h6" color="textSecondary" component="p" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleClickLike}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role === 'admin') && (
                    <Button size="small" color="primary" onClick={handleClickDelete}>
                    <DeleteIcon fontSize="large" />
                </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Post;