import React, {useEffect, useState} from 'react';
import {Container, Grow, Grid, BottomNavigation, Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';//to dispatch an action - this is a hook.
import {getPosts} from './actions/posts.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
//import useStyles from './components/Header/styles.js';

const App = () => {
    //keeping track of current id for the post that is being edited - App is a parent comp. to both Form and post so it needs to be placed here.
    const [currentId, setCurrentId] = useState(null);
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
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        <BottomNavigation style={{backgroundColor:"#c2affd", justifyContent:"center", paddingTop:20, marginTop:50}}>
            <Typography variant="body1" style={{color:"white"}}>&copy; Traveho 2021.</Typography>
        </BottomNavigation>
        </>
    );
}
export default App;