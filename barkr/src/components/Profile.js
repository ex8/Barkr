import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Person, AccountCircle, Label, Edit} from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {CircularProgress, TextField} from "@material-ui/core";
import {petLogin} from '../redux/actions/petActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

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
    sideNav: {
        display: 'block',
        width: 200,
    },
    root: {
        display: 'flex',
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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
});
const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            LastName: '',
            email: '',
            password: '',
            dobb: '',
            address : '',
            unit : '',
            city : '',
            state : '',
            zip : '',
            loading: false,
            editOn: false,
            errors: {}
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
            password: this.state.password
        };
        this.props.petLogin(pet, this.props.history);
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
        return (            
            <main className={classes.root}>
             <Paper className={classes.paper}>
                <div className= {classes.sideNav}>
                <MenuList>
                    <MenuItem>My Information</MenuItem>
                    <MenuItem>My Pets</MenuItem>
                    <MenuItem>Change Password</MenuItem>
                </MenuList>
                </div>
                </Paper>
                <div className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountCircle/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Profile
                    </Typography>
                    <Button 
                            onClick={() => { this.setState({editOn: true}); }}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            {this.state.loading && <CircularProgress size={25} color={'primary'}/>}
                            <Edit className={classes.leftIcon} />
                            {!this.state.editOn && "Edit Profile"}
                            {this.state.editOn && "Cancel"}
                    </Button>

                    <form className={classes.container} onSubmit={this.onFormSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                                   name="firstName" autoComplete="lastName" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Last Name</InputLabel>
                            <Input id="LastName" value={this.state.lastName} onChange={this.onInputChange}
                                   name="firstName" autoComplete="lastName" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" value={this.state.email} onChange={this.onInputChange}
                                   name="email" autoComplete="email" autoFocus/>
                        </FormControl>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            margin="normal"
                            fullWidth
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Address">Address</InputLabel>
                            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                                name="firstName" autoComplete="lastName" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="Address">Unit</InputLabel>
                            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                                name="firstName" autoComplete="lastName" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Address">City</InputLabel>
                            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                                name="firstName" autoComplete="lastName" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Address">State</InputLabel>
                            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                                name="firstName" autoComplete="state" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Address">Zip</InputLabel>
                            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                                name="firstName" autoComplete="lastName" autoFocus />
                        </FormControl>
                        {this.state.editOn &&
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                {!this.state.loading && 'Submit'}
                                {this.state.loading && <CircularProgress size={25} color={'primary'} />}
                            </Button>
                        }

                    </form>
                </Paper>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
});

const mapDispatchToProps = {petLogin};

export default withStyles(styles)(connect(
    mapStateToProps, mapDispatchToProps
    )(withRouter(Profile)));
