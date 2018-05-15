import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import SimpleTable from './SimpleTable'

import {ListItem} from 'material-ui/List';


const styles = theme => ({
   root: {
    flexGrow: 1
  }
});

function Pitanje(props){
        const { classes } = props;
return(
	<div key={props.pitanje.id} className={classes.root}  >
  <ListItem key={props.pitanje.id}> 
    <SimpleTable  odgovor={props.pitanje.odgovor}  kadOdgovori ={props.kadOdgovori} id_pitanja={props.pitanje.id} tekst_pitanja = {props.pitanje.tekst_pitanja} ponudjeni={props.pitanje.ponudjeni} />
  </ListItem>
 </div>
)}



                
Pitanje.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Pitanje);
