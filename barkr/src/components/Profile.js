import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { AccountCircle, Edit } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { CircularProgress, TextField } from "@material-ui/core";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
    media: {
        height: 300,
    },
    card: {
        maxWidth: 400,
    },
});
// const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.auth.user.email,
            name: this.props.auth.user.name,
            age: this.props.auth.user.age,
            breed: this.props.auth.user.breed,
            description: this.props.auth.user.description,
            thumbnail: this.props.auth.user.thumbnail,
            city: this.props.auth.user.city,
            state: this.props.auth.user.state,
            // Existing Profile Picture
            profilePic: null,
            // This is the picture that the user is uploading to replace Profile Pic
            uploadImg: null,
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
        this.setState({
            editOn: false,
        })
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };

    componentDidMount = () => {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push(`/login`);
        }
    };
    fileSelectedHandler = event => {
        this.setState({
            profilePic: URL.createObjectURL(event.target.files[0]),
            uploadImg: event.target.files[0],
        })
        console.log(event.target.files[0]);
        console.log(URL.createObjectURL(event.target.files[0]));
    }
    fileUPloadHandler = () => {
        // Do some magic shit to send to the backend
    }
    submitForm = () => {
        console.log("Form Submit");
        this.setState({
            editOn: false,
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.root}>
                <div className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <AccountCircle />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Profile
                    </Typography>
                        {!this.state.editOn &&
                            <Button
                                onClick={() => { this.setState({ editOn: true }); }}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                {this.state.loading && <CircularProgress size={25} color={'primary'} />}
                                <Edit className={classes.leftIcon} />
                                {!this.state.editOn && "Edit Profile"}
                            </Button>
                        }

                        <form className={classes.container} onSubmit={this.onFormSubmit}>
                            <Card display="flex">
                                <CardMedia
                                    className={classes.media}
                                    image={this.state.profilePic !== null ? this.state.profilePic : '/placehold-person.jpg'}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography component="p">
                                        This photo will be shown to other pets to swipe around!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {this.state.editOn &&
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            style={{ display: 'none' }}
                                            id="raised-button-file"
                                            type="file"
                                            onChange={this.fileSelectedHandler}
                                        />
                                    }
                                    <label htmlFor="raised-button-file">
                                        <Button size="small" variant="contained" component="span"
                                            className={classes.button}
                                            disabled={!this.state.editOn}>
                                            Choose Picture
                                        </Button>
                                    </label>
                                    <Button size="small" color="primary" disabled={true}></Button>
                                    {this.state.editOn &&
                                        <Button size="small" color="primary"
                                            onClick={this.fileUPloadHandler}
                                            variant="contained"
                                            disabled={this.state.uploadImg==null}
                                        >
                                            Upload & Save
                                        </Button>
                                    }
                                </CardActions>
                            </Card>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" value={this.state.email} onChange={this.onInputChange}
                                    name="email" autoComplete="email" autoFocus readOnly={!this.state.editOn}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="name">Pet Name</InputLabel>
                                <Input id="name" value={this.state.name} onChange={this.onInputChange}
                                    name="name" autoComplete="name" readOnly={!this.state.editOn}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="age">Pet Age</InputLabel>
                                <Input id="age" value={this.state.age} onChange={this.onInputChange}
                                    name="age" autoComplete="age" readOnly={!this.state.editOn}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="breed">Pet Breed</InputLabel>
                                <Input id="breed" value={this.state.breed} onChange={this.onInputChange}
                                    name="breed" autoComplete="breed" readOnly={!this.state.editOn}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="description">Pet Description</InputLabel>
                                <Input id="description" value={this.state.description} onChange={this.onInputChange}
                                    name="description" autoComplete="description" readOnly={!this.state.editOn}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="city">City</InputLabel>
                                <Input id="city" value={this.state.city} onChange={this.onInputChange}
                                    name="city" autoComplete="city" readOnly={!this.state.editOn}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="state">State</InputLabel>
                                <Input id="state" value={this.state.state} onChange={this.onInputChange}
                                    name="state" autoComplete="state" readOnly={!this.state.editOn}/>
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
                                readOnly={!this.state.editOn}
                            />
                            {this.state.editOn &&
                                <Button
                                    type="submit"
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
    auth: state.auth
});

export default withStyles(styles)(connect(
    mapStateToProps
)(withRouter(Profile)));
