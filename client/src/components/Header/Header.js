import React, {useState} from 'react';
import useStyles from './styles.js';
import {AppBar, Toolbar, Typography, Tabs, Tab} from '@material-ui/core';
import {Link} from 'react-router-dom';
//import DrawerMenu from '../DrawerMenu/DrawerMenu.js';

export default function Header() {

    const classes = useStyles();

    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
      setValue(newValue);
    }
    
    // const [anchorEl, setAnchorEl] = React.useState(null);
    //const open = Boolean(anchorEl);
  
    /*const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };*/
  
    /*const handleClose = () => {
      setAnchorEl(null);
    };*/
  
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>Traveho</Typography>
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor: "white"}}}>
              <Tab label="Posts" className={classes.link} component={Link} to="/"/>
              <Tab label="Blog" className={classes.link} component={Link} to="/blog" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
}

