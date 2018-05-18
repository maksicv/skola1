import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,TextField} from 'material-ui';
import { FormControl,
	 FormLabel,
         FormControlLabel,
         Radio,
	 RadioGroup
       } from 'material-ui';
const styles = theme => ({
    textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit,
	minWidth: 400
    },
    formControl: {
	margin: theme.spacing.unit * 3,
  },
    group: {
	margin: `${theme.spacing.unit}px 0`,
    },
});


export default withStyles(styles)( class NewPitanje extends React.Component {

    constructor(props){
	super(props);
	this.state ={
	    pitanje: {
		description: "",
		tipPitanja: "OPEN",
		ponudjeni: []
	    }
	};
    }
    
    handleChangePitanje=(e)=> {
	const pitanje = e.target.value;
	this.setState((prevState)=>{
	    const newPitanje = Object.assign({},prevState.pitanje,{description: pitanje  });
	    return { pitanje: newPitanje };
	});
	
    }
	
    handleChangeTipPitanja=(e)=>{
	const tipPitanja = e.target.value;
	this.setState((prevState)=>{
	    const newPitanje = Object.assign({},prevState.pitanje,{tipPitanja: tipPitanja });  
	    return {pitanje: newPitanje};
	});
    }
    
    render() {
	const {classes} = this.props;
	return (
	    
	    <Grid container>
	      <TextField
		className={classes.textField}
		id="description"
		label="Pitanje"
		placeholder="Pitanje"
		multiline
		margin="normal"
		/>
	      <FormControl component="fieldset" required className={classes.formControl}>
		<FormLabel component="legend">Tip pitanja</FormLabel>
		<RadioGroup
		  aria-label="tip pitanja"
		  name="tipPitanja"
		  className={classes.group}
		  value={this.state.pitanje.tipPitanja}
		  onChange={ this.handleChangeTipPitanja }
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
	);
    }
});

