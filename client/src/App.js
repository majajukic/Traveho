import React from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import Footer from './components/Footer/Footer.js';
import Auth from './components/Auth/Auth.js';
import About from './components/About/About.js';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const App = () => {
    
    return(
        <Router>
            <Header width={1} />
            <Switch>
                <Route path="/" exact component={() => <Redirect to="/posts" />} />
                <Route path="/posts" exact component={Home} />
                <Route path="/posts/search" exact component={Home} />
                <Route path="/posts/:id" component={PostDetails} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/about" exact component={About} />
                <Route path="*" exact component={ErrorPage} />
            </Switch>
            <Footer />
        </Router>
    );
}
export default App;