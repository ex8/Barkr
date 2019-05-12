import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {CircularProgress, TextField} from "@material-ui/core";
// npm install @material-ui/styles@next
const drawerWidth = 240;
const styles = theme => ({
    root: {
      display: 'flex',
      textAlign: 'left',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
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

class ProfileInformation extends Component {
  state = {
    mobileOpen: false,
    loading: false,
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form className={classes.max300} onSubmit={this.onFormSubmit}>
                    <FormControl margin="normal" required halfWidth>
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
                            name="firstName" autoComplete="lastName" autoFocus />
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
  }
}
export default withStyles(styles, { withTheme: true })(ProfileInformation);