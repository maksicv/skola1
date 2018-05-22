import React,{Component} from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,Paper} from 'material-ui';

const styles = theme => ({
    root : {
    },
    paper: {
      padding: 10,
	margin: 50,
        flexGrow: 1,
	minHeight: 400,
	
    },
    top: {
	textAlign: 'center'
    }
});

export default withStyles(styles)(class DodavanjePitanja extends Component {
    render(){
	const {classes} = this.props;
	return (
	    <Paper className={classes.paper}>
	      <Grid container >
		<Grid className={classes.top} item xs={12}>
		  Anketa naslov
		</Grid>
		<Grid container>
		  <Grid item xs={6}>Levo</Grid>
		  <Grid item xs={6}>Desno</Grid>
		</Grid>
	      </Grid>
            </Paper>
	);
    }
});
