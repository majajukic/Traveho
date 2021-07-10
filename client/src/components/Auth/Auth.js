import React, {useState } from 'react'
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import {GoogleLogin} from "react-google-login";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input.js';
import Icon from './icon.js'
import useStyles from './styles.js';
import {signin, signup} from '../../actions/auth';

//inicial state object:
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Auth = () => {
    
    const classes = useStyles();
    const [isSignup, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));   //getting a hold of the user to check if he is logged in or not
                                                                //and to render the Auth page accordingly.

    if (user) {
        history.push('/');
    }

    const handleSubmit = (e) => {
        //always add this to form submit in React to avoid reloads of the page.
        e.preventDefault();

        //two types of submits:sign in or sign up:
        if (validate()) {
          if (isSignup) {
            dispatch(signup(formData, history));
          } else {
            // return in action makes a promise and with .then the status code can be accessed: 
            dispatch(signin(formData, history)).then((err) => {
              if (err?.response.status === 404 || err?.response.status === 400) {
                alert("No user with such creditentials found. Please, check your email and password.");
              }
            });
          }
        }

    }

    const validate = () => {
        const temp = {};
        temp.password = formData.password.length > 5 ? "" : "Password needs more than 5 characters";
        temp.passwordFailed = formData.password.length > 5 ? false : true;

        if (isSignup) {
          temp.confirmPassword =
                formData.confirmPassword === formData.password
                ? ""
                : "Passwords don't match.Try again!";
            
            temp.confirmPasswordFailed =
                formData.confirmPassword === formData.password
                ? false
                : true;
        }
        
        setErrors({
          ...temp
        });
    
        return Object.values(temp).every(x => (x === "" || x === false));
      }

    const handleChange = (e) => {
        //spread all properties, but only change one specific field that is being changed in current time.
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    //when the state is being changed using the olde state, prevState is needed.
    const handleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignUp(prevIsSignUp => !prevIsSignUp);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        //without optional chaining operator we would get an error if res object doesn't exist.This way its gonna be 'undefined'.
        const result = res?.profileObj;
        const token = res?.tokenId

        try {
            dispatch({type: "AUTH", data: {result, token}});
            history.push("/")//get the user back to the home route.

        } catch(error) {
            console.log(error);
        }

    }

    const googleFailure = () => {
        console.log("Google sign in failed! Try again later.");
        
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName"  label="Last Name" handleChange={handleChange} half />
                               </>
                            )
                        }
                        <Input name="email" label="Email Adress" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} error={errors.passwordFailed} helperText={errors.password} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Confirm Password" error={errors.confirmPasswordFailed} helperText={errors.confirmPassword} handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
                        { isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin 
                        clientId="1077599688905-8jc58l5288khrq5ri29iqvjos7es9phh.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} variant="contained" fullWidth startIcon={<Icon />} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                {isSignup ? "Google Sign Up" : "Google Sign In"}
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                                <Typography className={classes.switch} variant="body2">{ isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
