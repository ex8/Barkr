import React, {Component} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {petSignup} from '../redux/actions/petActions';
import {Avatar, Button, CssBaseline, FormControl, 
    Input, InputLabel, Paper, Typography, CircularProgress} from '@material-ui/core';

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
            loading: false,
            errors: {},
        };
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.setState({loading: true});
        const pet = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            age: this.state.age,
            breed: this.state.breed,
            city: this.state.city,
            state: this.state.state
        };
        this.props.petSignup(pet, this.props.history);
        this.setState({loading: false});
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };

    componentDidMount = () => {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push(`/`);
        }
    };

    render() {
        const {classes} = this.props;
        const {email, password, name, age, breed, city, state} = this.state;
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
                            {!this.state.loading && 'Signup'}
                            {this.state.loading && <CircularProgress size={25} color={'primary'}/>}
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});

const mapDispatchToProps = {petSignup};

export default withStyles(styles)(connect(
    mapStateToProps, 
    mapDispatchToProps
    )(withRouter(Signup)));
