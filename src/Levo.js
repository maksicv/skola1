import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Grid} from 'material-ui';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin:5,
	padding: 10
  },
});
function Levo(props){
	const { classes } = props;
	return(
	<Grid item xs={3}>
	<Paper className = {classes.paper}>
		{props.anketa}{props.ime}
	</Paper>
	</Grid>
	)
}
Levo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Levo);