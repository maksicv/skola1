import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import SimpleTable from './SimpleTable';
import OpenPitanje from './OpenPitanje';

import {ListItem} from 'material-ui/List';


const styles = theme => ({
   root: {
    flexGrow: 1
  }
});

function Pitanje(props){
    console.log(props);
        const { classes } = props;
return(
	<div key={props.pitanje.id} className={classes.root}  >
	  <ListItem key={props.pitanje.id}>
	    { props.pitanje.tipPitanja === "RESTRICTED" ?
		<SimpleTable  odgovor={props.pitanje.odgovor}
			  kadOdgovori ={props.kadOdgovori}
			  pitanje={props.pitanje}
				  /> :
		    <OpenPitanje  odgovor={props.pitanje.odgovor}
			  kadOdgovori ={props.kadOdgovori}
			  pitanje={props.pitanje}
			  />
		}
	  </ListItem>
	</div>
)}



                
Pitanje.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Pitanje);
