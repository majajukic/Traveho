import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';//to dispatch an action - this is a hook.
import {Container, Grow, Grid} from '@material-ui/core';
import {getPosts} from '../../actions/posts.js';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import useStyles from './styles.js';

const Home = () => {

    const classes = useStyles();
    //keeping track of current id for the post that is being edited - App is a parent comp. to both Form and post so it needs to be placed here.
    const [currentId, setCurrentId] = useState(null);
     //defining the dispatch:
    const dispatch = useDispatch();
    //useEffect to dispatch an action:
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    return (
        <Container maxidth="lg">
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    )
}

export default Home
