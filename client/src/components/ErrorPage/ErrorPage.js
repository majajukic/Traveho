import React from 'react'
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles.js';

const ErrorPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainbox}>
            <div className={classes.err0}>4</div>
            <div className={classes.err1}>0</div>
            <div className={classes.err2}>4</div>
            <div className={classes.msg1}>
                <Typography variant="h5">Oops! Page not found. Maybe this page was moved? Got deleted? Never existed in the first place? Perhaps you've made a typo? </Typography>
            <div className={classes.msg2}>
                <Typography variant="h6">Let's go <Link to="/" className={classes.link}>home</Link> and try from there.</Typography>
            </div>
            </div>
        </div>
    )
}

export default ErrorPage
