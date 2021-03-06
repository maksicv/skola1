import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,Chip} from 'material-ui';
import Pitanje from '../Pitanje';

const styles = theme => ({
    grid: {
	margin: 10,
	padding: 10
    }
});


export default withStyles(styles)(class ShowPitanje extends React.Component {
    render(){
	const {classes} = this.props;
	const {pitanje}= this.props;
	const {preview} = this.props;
	return (
	    <Grid container>
	      {  preview  ?  <Pitanje key={pitanje.id}  kadOdgovori ={()=>null}  pitanje={pitanje}/>
 :
  		  <Grid container>
			<Grid className={classes.grid} item>{pitanje.description}</Grid>
			    <Grid className={classes.grid} item>{pitanje.tipPitanja}</Grid>
				{
				    pitanje.tipPitanja === "RESTRICTED" ?   pitanje.ponudjeniOdgovori.map(
					(odgovor)=><Grid className={classes.grid} key={odgovor} item>
					    <Chip label={odgovor}/></Grid>) : <div/>
				}
		 <Grid className={classes.grid} item >
		   
		 </Grid>
		 </Grid>   }
	  </Grid>  
	);
    }
});


