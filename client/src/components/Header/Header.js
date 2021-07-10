import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useStyles from './styles.js';
import {AppBar, Toolbar, Typography, Button, Avatar} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link, useHistory, useLocation} from 'react-router-dom';
import decode from 'jwt-decode';

export default function Header() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    
    //console.log(user);

    const logout = () => {
      dispatch({type: "LOGOUT"});

      history.push("/");
      localStorage.removeItem("profile");

      setUser(null);

    }

    //By using this Hook, you tell React that your component needs to do something after render
    useEffect(() => {
      const token = user?.token;

      if(token) {
        const decodedToken = decode(token);

        //time in miliseconds
        if(decodedToken.exp * 1000 < new Date().getTime()) {
          logout();
        }
      }

      setUser(JSON.parse(localStorage.getItem("profile")))

    }, [location]);/*The dependency array [] in useEffect lets you specify the conditions to trigger it.
                     If you provide useEffect an empty dependency array, it'll run exactly once. This time, it will run
                     only when the location changes!*/

    function changeColor(e) {
      e.target.style.color = "#7c5ee0";
    }    
    
    function resetColor(e) {
      e.target.style.color = "white";
    } 
  
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" className={classes.title} component={Link} to="/" onMouseOver={changeColor} onMouseLeave={resetColor}>Traveho</Typography>
            {user ? (
              <div className={classes.profile}>
                {user?.result?.role === 'admin' ? <AccountCircleIcon fontSize="large" /> : <Avatar style={{backgroundColor:'#7c5ee0'}}>{user.result.name.charAt(0)}</Avatar>}
                <Button className={classes.logout} variant="contained" onClick={logout} style={{backgroundColor:'#7c5ee0', color:'white'}}>Log Out</Button>
              </div>

            ) : (
              <Button component={Link} to="/auth" variant="contained" style={{backgroundColor:'#7c5ee0', color:'white'}}>Sign In</Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
}

