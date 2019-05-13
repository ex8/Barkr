import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {CircularProgress, TextField} from "@material-ui/core";
import { unstable_Box as Box } from "@material-ui/core/Box";
// npm install @material-ui/styles@next
const styles = theme => ({});

class myPets extends Component {
  state = {
    loading: false,
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h3>My Pets List</h3>
        {/* Put a way for people to see their pets here */}
      </main>
    )
  }
}
export default withStyles(styles, { withTheme: true })(myPets);