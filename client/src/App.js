import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import traveho from './images/polaroid.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

const App = () => {
    return(
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Traveho</Typography>
                <img src={traveho} alt="traveho" height="960"/>
            </AppBar>
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
    );
}
export default App;