import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Paper, Grid} from 'material-ui';
import ListaPitanja from './ListaPitanja';
import Ankete from './Ankete.js';
import Odgovaranje from './Odgovaranje.js';
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
 	props.mode === "ODGOVARANJE"  ?    <Odgovaranje  mode= {props.mode}
	                  kadOdgovori ={props.kadOdgovori}
	    celaAnketa={props.celaAnketa} /> : <Ankete ankete={props.ankete}/>
        )
	
}

Desno.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Desno);
