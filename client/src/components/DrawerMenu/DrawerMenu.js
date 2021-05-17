import React, {useState} from 'react'
import {Drawer, List, ListItem, ListItemText} from '@material-ui/core';

const DrawerMenu = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClose = () => {
        setOpenDrawer(false);
    }

    return (
        <Drawer
            open={openDrawer}
            onClose={handleClose}
            anchor='right'
        >
        <List>
            <ListItem>
                <ListItemText>Posts</ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemText>Blog</ListItemText>
            </ListItem>
        </List>
        </Drawer>
    )
}

export default DrawerMenu;
