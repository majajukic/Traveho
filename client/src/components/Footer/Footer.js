import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import useStyles from './styles.js';

const Footer = () => {
    const classes = useStyles();

    return (
        <>
        <BottomNavigation className={classes.footer} showLabels>
            <BottomNavigationAction className={classes.copyright} label="&copy; Traveho 2021" />    
        </BottomNavigation> 
        </>
    )
}

export default Footer
