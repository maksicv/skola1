import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,TextField,Chip} from 'material-ui';
import { FormControl,
	 FormLabel,
         FormControlLabel,
         Radio,
	 RadioGroup
       } from 'material-ui';
import Add from '@material-ui/icons/Add';


const styles = theme => ({
    textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit,
	minWidth: 200
    },
    formControl: {
	margin: theme.spacing.unit * 3,
  },
    group: {
	margin: `${theme.spacing.unit}px 0`,
    },
});


export default withStyles(styles)( class NewPitanje extends React.Component {


    
    render() {
	const {classes} = this.props;
	return (
	    
	    <Grid container>
	      <Grid container >
		<Grid item xs={4} >
		  <TextField
		    className={classes.textField}
		    id="description"
		    label="Pitanje"
		    onChange ={this.props.handleChangePitanje} 
		    value={this.props.pitanje.description}
		    placeholder="Pitanje"
		    multiline
		    margin="normal"
		    />
		</Grid>

		<Grid item xs={3}>
		  <FormControl component="fieldset" required className={classes.formControl}>
		    <FormLabel component="legend">Tip pitanja</FormLabel>
		    <RadioGroup
		      aria-label="tip pitanja"
		      name="tipPitanja"
		      className={classes.group}
		      value={this.props.pitanje.tipPitanja}
		      onChange={ this.props.handleChangeTipPitanja }
		      >
		  
		      <FormControlLabel value="OPEN"
					control={<Radio />}
					label="Otvoreno" />
		      <FormControlLabel value="RESTRICTED"
					control={<Radio />}
					label="Izbor" />
		    </RadioGroup>
		  </FormControl>
		</Grid>
		{ this.props.pitanje.tipPitanja === "RESTRICTED" ?
		    <Grid item xs={5}>
			  <TextField
				className={classes.textField}
				id="newanswer"
				onChange={this.props.handleAnswerText}
				label="Odgovor"
				placeholder="Pondudjeni Odgovor"
				margin="normal"
				/>

			        <Add onClick={this.props.handleAddAnswer}  />
				  <div>
					{ this.props.pitanje.ponudjeniOdgovori.map( (e)=>
						<Chip onDelete={()=>this.props.handleDeleteAnswer(e)} label={e} key={e}/>)
					  
					}
	          </div>
		  </Grid> :<div/> }
	    </Grid>
		</Grid>
		
	);
    }
});

