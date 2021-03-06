import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {petLogout} from '../redux/actions/petActions';
import {Link, withRouter} from "react-router-dom";

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

class Navigation extends Component {
    onLogout = e => {
        e.preventDefault();
        this.props.petLogout(this.props.history);
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        const {classes} = this.props;
        const authLinks = (
            <div>
                <Link to='/about' className={classes.linkButton}>
                    <Button color='inherit'>About</Button>
                </Link>
                <Link to='/chats' className={classes.linkButton}>
                    <Button color='inherit'>Chats</Button>
                </Link>
                <Link to='/profile' className={classes.linkButton}>
                    <Button color='inherit'>Profile</Button>
                </Link>
                <Button onClick={this.onLogout} color='inherit'>Logout</Button>
            </div>
        );
        const guestLinks = (
            <div>
                <Link to='/login' className={classes.linkButton}>
                    <Button color='inherit'>Login</Button>
                </Link>
                <Link to='/signup' className={classes.linkButton}>
                    <Button color='inherit'>Signup</Button>
                </Link>
            </div>
        );
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        <Link to="/" className={classes.linkButton}>Barkr</Link>
                    </Typography>
                    <div className={classes.rightToolbar}>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {petLogout};

export default withStyles(styles)(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(withRouter(Navigation)));
