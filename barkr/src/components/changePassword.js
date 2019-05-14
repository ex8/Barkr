import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {CircularProgress, TextField} from "@material-ui/core";
import { unstable_Box as Box } from "@material-ui/core/Box";
// npm install @material-ui/styles@next
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

class ChangePassword extends Component {
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
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Old Password</InputLabel>
            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
              name="firstName" autoComplete="lastName" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">New Password</InputLabel>
            <Input id="FirsName" value={this.state.firstName} onChange={this.onInputChange}
              name="firstName" autoComplete="lastName" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Retype Password</InputLabel>
            <Input id="password" value={this.state.firstName} onChange={this.onInputChange}
              name="firstName" autoComplete="lastName" autoFocus />
          </FormControl>
          <Box display="flex" justifyContent="flex-end" m={1} p={1}>
            <Button
              type="Cancel"
              halfWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {!this.state.loading && 'Cancel'}
              {this.state.loading && <CircularProgress size={25} color={'secondary'} />}
            </Button>
            <Button
              type="submit"
              halfWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              {!this.state.loading && 'Submit'}
              {this.state.loading && <CircularProgress size={25} color={'primary'} />}
            </Button>
          </Box>

        </form>
      </main>
    )
  }
}
export default withStyles(styles, { withTheme: true })(ChangePassword);