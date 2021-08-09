import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Container, Button, Grow} from '@material-ui/core';
import useStyles from './styles.js';
import sunset from './images/sunset.jpg';
import collaboration from './images/collaboration.png';
import research from './images/research.png';
import luggage from './images/luggage.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';

const About = () => {
    const classes = useStyles();

    return (
        <>
        <Grow in timeout={2000}>
            <main>
                <div>
                    <Container maxWidth="lg">
                    <div>
                        <Grid container spacing={6} direction="row" className={classes.firstSection}>
                            <Grid item>
                                <Typography className={classes.title} variant="h2" paragraph>For all travel lovers and for those who are yet to become.</Typography>
                            </Grid>
                            <Grid item>
                                <img src={sunset} alt="sunset" className={classes.sunsetImage} />
                            </Grid>
                        </Grid>
                    </div>
                    </Container>
                    <Container maxWidth="lg">
                        <Grid container spacing={4} className={classes.cardGrid} alignItems="center">
                            <Grid item>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={luggage}/>
                                    <CardContent className={classes.cardContent} align="center">
                                        <Typography variant="h4" className={classes.headerText}><strong>1. Travel</strong></Typography>
                                        <Typography variant="h5" color="textPrimary" paragraph>Pack your bags and take a trip of a lifetime.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={research}/>
                                    <CardContent className={classes.cardContent} align="center">
                                        <Typography variant="h4" className={classes.headerText}><strong>2. Discover</strong></Typography>
                                        <Typography variant="h5" color="textPrimary" paragraph>Find interesting places and learn about new cultures.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={collaboration}/>
                                    <CardContent className={classes.cardContent} align="center">
                                        <Typography variant="h4" className={classes.headerText}><strong>3. Share</strong></Typography>
                                        <Typography variant="h5" color="textPrimary" paragraph>Post about your experience and invite others to take a trip as well.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="md">
                        <Grid container className={classes.thirdSection} spacing={4} alignItems="center" direction="column">
                            <Grid item>
                                <Typography variant="h4" className={classes.callToAction}>Find the perfect trip today!</Typography>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/auth" className={classes.button} variant="contained" size="large">Sign up</Button>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container maxWidth="xs">
                        <Grid container spacing={4} className={classes.fourtSection} justifyContent="center">
                            <Grid item>
                                <Link href="https://www.instagram.com/traveho/" target="_blank">
                                    <InstagramIcon fontSize="large" style={{fill:"#3d16db"}} />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://www.facebook.com/Travehooo/" target="_blank">
                                    <FacebookIcon fontSize="large" style={{fill:"#3d16db"}}/>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="https://www.linkedin.com/company/traveho-tours" target="_blank">
                                    <LinkedInIcon fontSize="large" style={{fill:"#3d16db"}}/>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </Grow>
        </>
    )
}

export default About;
