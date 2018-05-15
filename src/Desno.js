import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
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
    console.log("MODE  " + props.mode );
    const ele =  props.mode === "ODGOVORANJE"  ? <Odgovaranje  mode= {props.mode}
	                                              kadOdgovori ={props.kadOdgovori}
	                                              celaAnketa={props.celaAnketa} /> :
                                    	<Ankete ankete={props.ankete}/>
	 
    return(
           ele
        )
	
}

Desno.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Desno);
