import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper,Grid,TextField} from 'material-ui';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  paper: {
    marginTop: theme.spacing.unit * 1,
    width: '100%'
  },
  table: {
    minWidth: 700,
  },
  checkCell:{
    margin: 50
    
  }
});



function  OpenPitanje(props) {
    const {classes} = props;
    const {pitanje} = props;
    return (
	<Paper className={classes.paper}>
	  <Grid container>
	    <Grid item xs={12}>
	      {pitanje.description}
	    </Grid>
	    <Grid>
	      <TextField
		autoFocus
		margin="dense"
		id="odgovor"
		label="Ogovor"
		type="text"
		fullWidth
              />

	    </Grid>
	  </Grid>
	</Paper>
    );
}

OpenPitanje.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenPitanje);
