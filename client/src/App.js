import React, {useEffect} from 'react';
import {Container, Grow, Grid,} from '@material-ui/core';
import {useDispatch} from 'react-redux';//to dispatch an action - this is a hook.
import {getPosts} from './actions/posts.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
//import useStyles from './components/Header/styles.js';

const App = () => {
    //defining the dispatch:
    const dispatch = useDispatch();
    //useEffect to dispatch an action:
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <>
        <Header width={1} />
        <Container maxidth="lg">
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </>
    );
}
export default App;