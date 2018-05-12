import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Paper, Grid} from 'material-ui';
import SimpleTable from './SimpleTable'

import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';


const styles = theme => ({
   root: {
    flexGrow: 1
  }
});

function Pitanje(props){
	const { classes } = props;
return(
 <div>
 <ListItem key={props.pitanje.id}> 
<SimpleTable   kadOdgovori ={props.kadOdgovori} id_pitanja={props.pitanje.id} tekst_pitanja = {props.pitanje.tekst_pitanja} ponudjeni={props.pitanje.ponudjeni} />
</ListItem>
				
					
</div>
)}



		
Pitanje.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Pitanje);