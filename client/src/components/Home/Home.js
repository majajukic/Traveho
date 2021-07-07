import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';//to dispatch an action - this is a hook.
import { useHistory, useLocation } from 'react-router-dom';
import {Container, Grow, Grid, Paper, AppBar, TextField, Button,} from '@material-ui/core';
import {getPosts, getPostsBySearch} from '../../actions/posts.js';
import ChipInput from 'material-ui-chip-input';//formats the inputs into chips
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import useStyles from './styles.js';
import Paginate from '../Pagination/Pagination.jsx';

//use this function as a hook:
function useQuery () {
    return new URLSearchParams(useLocation().search);

}

const Home = () => {

    const classes = useStyles();
    //keeping track of current id for the post that is being edited - App is a parent comp. to both Form and post so it needs to be placed here.
    const [currentId, setCurrentId] = useState(null);
    //state for the search field:
    const [searchTerm, setSearchTerm] = useState('');
    //tags state:
    const [tags, setTags] = useState([]);
     //defining the dispatch:
    const dispatch = useDispatch();
    //using the custom hook:
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;//reads the url and detects if the page parameter is present/ if there is no page, we are on the 1st one
    const searchQuery = query.get('searchQuery');


    //useEffect to dispatch an action:
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchPost();
        }
    }

    const handleAdd = (tag) => {
        setTags([...tags, tag]);
    }

    const handleDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag !== tagToDelete));
    }

    const searchPost = () => {
        if (searchTerm.trim() || tags) {
          dispatch(getPostsBySearch({ searchTerm, tags: tags.join(',') }));
          history.push(`/posts/search?searchQuery=${searchTerm || 'none'}&tags=${tags.join(',')}`);
        } else {
          history.push('/');
        }
    };
    
    return (
        <>
        <Container maxWidth="xl">
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} md={8} sm={6}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={6}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField 
                                name="search"
                                variant="outlined"
                                label="Search by word in the title"
                                fullWidth
                                value={searchTerm}
                                onKeyPress={handleKeyPress}
                                onChange={(e)=>{
                                    setSearchTerm(e.target.value)
                                }}
                            />
                            <ChipInput 
                                className={classes.chipInput}
                                variant="outlined"
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search by tags (press enter after each tag)"
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        <Paper elevation={6}>
                            <Paginate />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
        </Container>
        </>
    )
}

export default Home;
