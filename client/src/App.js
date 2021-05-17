import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Blog from './components/Blog/Blog.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';


const App = () => {

    return(
        <Router>
            <Header width={1} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                <Route path="*" exact component={ErrorPage} />
            </Switch>
            <BottomNavigation style={{backgroundColor:"#c2affd", justifyContent:"center", paddingTop:20, marginTop:50}} showLabels>
                <BottomNavigationAction label="&copy; Traveho 2021" style={{color: 'white'}} />    
            </BottomNavigation>
        </Router>
    );
}
export default App;