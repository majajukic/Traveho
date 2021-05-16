import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container, Grow, Grid, BottomNavigation, Typography, BottomNavigationAction} from '@material-ui/core';
//import {useDispatch} from 'react-redux';//to dispatch an action - this is a hook.
//import {getPosts} from './actions/posts.js';
import { BrowserRouter as Router } from "react-router-dom";
//import Posts from './components/Posts/Posts.js';
//import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
//import useStyles from './styles.js';
import Home from './components/Home/Home.js';
import Blog from './components/Blog/Blog.js';

const App = () => {

    return(
        <Router>
            <Header width={1} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                {/*<Route exact path="/"> 404
                    <Redirect to ="/posts" />
                </Route>*/}
            </Switch>
           <BottomNavigation style={{backgroundColor:"#c2affd", justifyContent:"center", paddingTop:20, marginTop:50}} showLabels>
                <BottomNavigationAction label="&copy; Traveho 2021" style={{color: 'white'}} />    
            </BottomNavigation>
        </Router>
    );
}
export default App;