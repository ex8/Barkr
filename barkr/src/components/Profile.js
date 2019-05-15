import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { CircularProgress, TextField } from "@material-ui/core";
import {Person, AccountCircle, Label, Edit} from '@material-ui/icons';

const styles = theme => ({
    root: {
        display: 'flex',
        textAlign: 'left',
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    FormControl: {
        paddingRight: 24,
    },
    max300: {
        maxWidth: 400,
    }

});

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // firstName: '',
            // lastName: '',
            // email: '',
            // password: '',
            // dobb: '',
            // address: '',
            // unit: '',
            // city: '',
            // state: '',
            // zip: '',
            loading: false,
            editOn: false,
            mobileOpen: false,
            errors: {}
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <main className={classes.content}>
                <Button
                        onClick={() => { this.setState({ editOn: true }); }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        {this.state.loading && <CircularProgress size={25} color={'primary'} />}
                        <Edit className={classes.leftIcon} />
                        {!this.state.editOn && "Edit Profile"}
                        {this.state.editOn && "Cancel"}
                    </Button>
                <form className={classes.max300} onSubmit={this.onFormSubmit} readOnly={!this.state.editOn}>
                    <FormControl margin="normal" required halfWidth>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                            name="firstName" autoComplete="firstName" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required halfWidth>
                        <InputLabel htmlFor="email">Last Name</InputLabel>
                        <Input id="LastName" value={this.state.lastName} onChange={this.onInputChange}
                            name="firstName" autoComplete="lastName" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" value={this.state.email} onChange={this.onInputChange}
                            name="email" autoComplete="email" autoFocus />
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
                    <Divider />
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
            </main>
        )
    };
}

export default withStyles(styles, { withTheme: true })(Profile);
