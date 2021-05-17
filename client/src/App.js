import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Blog from './components/Blog/Blog.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import Footer from './components/Footer/Footer.js';


const App = () => {

    return(
        <Router>
            <Header width={1} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                <Route path="*" exact component={ErrorPage} />
            </Switch>
            <Footer />
        </Router>
    );
}
export default App;