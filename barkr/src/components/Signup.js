import React, {Component} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import {Avatar, Button, CssBaseline, FormControl, Input, InputLabel, Paper, Typography} from '@material-ui/core';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    root: {
        background: 'green'
    }
});

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            age: '',
            breed: '',
            city: '',
            state: '',
        };
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        axios.post(`/api/signup`, this.state)
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    this.setState({
                        email: '',
                        password: '',
                        name: '',
                        age: '',
                        breed: '',
                        city: '',
                        state: '',
                        successMessage: 'Pet created. You may now login!'
                    });
                }
                else {
                    this.setState({
                        errorMessage: 'Error creating pet. Try again!'
                    });
                }
            }).catch(err => {
                console.error(`Error creating pet... ${err}`);
            });
    };

    render() {
        const {classes} = this.props;
        const {email, password, name, age, breed, city, state, errorMessage, successMessage} = this.state;
        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Typography component="h6" variant="h6">
                        {successMessage}
                        {errorMessage}
                    </Typography>
                    <form className={classes.form} onSubmit={this.onFormSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input onChange={this.onInputChange} value={email} name="email" type="email" autoFocus required/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input onChange={this.onInputChange} value={password} name="password" type="password" required/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">Pet Name</InputLabel>
                            <Input onChange={this.onInputChange} value={name} name="name" type="text" required/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="age">Pet Age</InputLabel>
                            <Input onChange={this.onInputChange} value={age} name="age" type="number" required/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="breed">Pet Breed</InputLabel>
                            <Input onChange={this.onInputChange} value={breed} name="breed" type="text" required/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input onChange={this.onInputChange} value={city} name="city" type="text" required/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="state">State</InputLabel>
                            <Input onChange={this.onInputChange} name="state" value={state} type="text" required/>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Signup
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Signup);