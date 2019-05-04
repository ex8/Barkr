import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {Link} from "react-router-dom";

const styles = {
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: -12,
    },
    menuButton: {
        marginRight: 16,
        marginLeft: -12,
    },
    linkButton: {
        textDecoration: 'none',
        color: 'white'
    }
};

const Navigation = ({classes}) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" color="inherit">
                Barkr
            </Typography>
            <div className={classes.rightToolbar}>
                <Link to='/' className={classes.linkButton}>
                    <Button color='inherit'>Home</Button>
                </Link>
                <Link to='/about' className={classes.linkButton}>
                    <Button color='inherit'>About</Button>
                </Link>
                <Link to='/login' className={classes.linkButton}>
                    <Button color='inherit'>Login</Button>
                </Link>
                <Link to='/signup' className={classes.linkButton}>
                    <Button color='inherit'>Signup</Button>
                </Link>
                <IconButton color="inherit" aria-label="Profile">
                    <AccountCircle/>
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
);


export default withStyles(styles)(Navigation);
