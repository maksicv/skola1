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
import ListaPitanja from './ListaPitanja'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin:5,
	padding: 10
	
  },
});
function Desno(props){
	const { classes } = props;
	return(
	<Grid item xs={9}>
	<Paper className = {classes.paper}>
	 <Typography variant="display1" gutterBottom>
        {props.celaAnketa.naziv_ankete}
      </Typography>
	  
	  <ListaPitanja kadOdgovori ={props.kadOdgovori} pitanja={props.celaAnketa.pitanja}/>
	
	

	</Paper>
	</Grid>
	)
}

Desno.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Desno);