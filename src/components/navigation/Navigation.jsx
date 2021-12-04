import { Drawer, List, IconButton, Menu, ListItem, MenuItem, ListItemIcon, Badge, ListItemText } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import User from '../user/User';
import classNames from 'classnames';
import styles from './Navigation.module.scss';
import { useState } from 'react';


export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
   
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Drawer variant="permanent" className={classNames(styles['drawer'])}>
            <div className={classNames(styles['user-log-out'])}>
                <User avatar="images/avatar.png" name="John Doe" size={55} headingSize='h5' />
                <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem className={classNames(styles['log-out'])} onClick={handleClose}>{"Log out"}</MenuItem>
                </Menu>
            </div>
                <List>
                    {['Apartment', 'Living Room', 'Bedroom', 'Bathroom', 'Toilet', 'Patio'].map((text, index) => (
                        <ListItem button key={text} className={classNames(index == 0 ? styles.selected : "", styles.listItem)}>
                            <ListItemIcon>
                                {index == 0 ? <HomeOutlinedIcon /> : <BedOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            {index == 0 ? <Badge color="secondary" badgeContent={5} /> : null}
                        </ListItem>
                    ))}
                </List>
                <List>
                    {['House', 'Living Room', 'Bedroom 1', 'Bedroom 2', 'Bedroom 3', 'Bathroom', 'Toilet', 'Patio'].map((text, index) => (
                        <ListItem button key={text} className={classNames(index == 0 ? styles.selected : "", styles.listItem)}>
                            <ListItemIcon>
                                {index == 0 ? <HomeOutlinedIcon /> : <BedOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            {index == 0 ? <Badge color="secondary" badgeContent={7} /> : null}
                        </ListItem>
                    ))}
                </List>
        </Drawer>
    );
}
