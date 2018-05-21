import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,Chip} from 'material-ui';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import SimpleTable from '../SimpleTable';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
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
	console.log(this.props);
	return (
	    <Grid container>
	      {  preview  ? <SimpleTable  odgovor={null}
		                         kadOdgovori ={()=>console.log("tu") }
		                         id_pitanja={pitanje.id}
		                         tekst_pitanja = {pitanje.description}
		    ponudjeni={pitanje.ponudjeniOdgovori} /> :
  		  <Grid container>
			<Grid className={classes.grid} item>{pitanje.description}</Grid>
			    <Grid className={classes.grid} item>{pitanje.tipPitanja}</Grid>
				{
				    pitanje.tipPitanja === "RESTRICTED" ?   pitanje.ponudjeniOdgovori.map(
					(odgovor)=><Grid className={classes.grid} key={odgovor} item>
					    <Chip label={odgovor}/></Grid>) : <div/>
				}
		 <Grid className={classes.grid} item >
		    <Edit/>
		    <Delete onClick={ ()=> this.props.onDelete(pitanje.id)  }  />
        	    <RemoveRedEye onClick={ ()=> this.props.onPreview(pitanje.id)}  />
		 </Grid>
		 </Grid>   }
	  </Grid>  
	);
    }
});


