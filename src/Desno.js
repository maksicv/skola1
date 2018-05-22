import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Ankete from './tbl/Ankete.js';
import Pitanja from './tbl/Pitanja.js';
import Odgovaranje from './Odgovaranje.js';
import DodavanjePitanja from './DodavanjePitanja';
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
    let ele = null;
    switch ( props.mode ){
      case "ODGOVORANJE":
	ele =  <Odgovaranje  mode= {props.mode}
	                     kadOdgovori ={props.kadOdgovori}
	                     celaAnketa={props.celaAnketa} />;
	    break;
    case "UREDJIVANJE_ANKETE":
	ele =   <Ankete dodajPitanja={props.dodajPitanja} ankete={props.ankete}/>;
	break;
    case "DODAVANJE_PITANJA":
 	ele = <DodavanjePitanja  editingAnketa = {props.editingAnketa}   />;
	break;
    case "PITANJA" :
	ele = <Pitanja/>;
	break;
    default:
	ele = <div>Wrong mode</div>;
	    
    };


     	 
    return(
           ele
    );
	
}

Desno.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Desno);
