import React from 'react';
import { Grid, Typography, Card, Button, Grow } from '@material-ui/core';
import useStyles from './styles.js';
import sunset from './sunset.jpg';

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.containerFluid}>
        <Grow in>
            <Grid container direction="row" alignContent="center">
                <Typography className={classes.title}>For all travel lovers <br /> and for those who <br /> are yet to become.</Typography>
                <img className={classes.image} src={sunset} alt="sunset" />
            </Grid>
        </Grow>
        </div>
    )
}

export default About;
