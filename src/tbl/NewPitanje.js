import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,TextField,Chip} from 'material-ui';
import { FormControl,
	 FormLabel,
         FormControlLabel,
         Radio,
	 Button,
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

    constructor(props){
	super(props);
	this.state ={
	    pitanje: {
		description: "",
		tipPitanja: "OPEN",
		ponudjeni: []
		
	    },
	    answer: ""
	};
    }
    handleDone=(e)=>{
	this.props.addPitanje(this.state.pitanje);
    }
    handleChangePitanje=(e)=> {
	const pitanje = e.target.value;
	this.setState((prevState)=>{
	    const newPitanje = Object.assign({},prevState.pitanje,{description: pitanje  });
	    return { pitanje: newPitanje };
	});
	
    }
    handleAddAnswer=(e)=>{
	this.setState((prevState)=>{
	    const newPonudjeni = [ ...prevState.pitanje.ponudjeni,prevState.answer];
	    const newPitanje =  Object.assign({},
					      prevState.pitanje,
					      {ponudjeni: newPonudjeni})
	    ;
	    return{ pitanje: newPitanje, answer:""};
	    
	});
    }
    
    handleChangeTipPitanja=(e)=>{
	const tipPitanja = e.target.value;
	this.setState((prevState)=>{
	    const newPitanje = Object.assign({},prevState.pitanje,{tipPitanja: tipPitanja });  
	    return {pitanje: newPitanje};
	});
    }
    handleAnswerText=(e) =>{
	const answer = e.target.value;
	this.setState({answer: answer });
    }
    handleDeleteAnswer=(answer)=>{
	this.setState((prevState)=>{
	    const newPonudjeni = prevState.pitanje.ponudjeni.filter( (a)=>{return answer !== a });
	    const newPitanje = Object.assign({},prevState.pitanje, {ponudjeni: newPonudjeni} );
	    return { pitanje: newPitanje};
	});
    } 
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
		    onChange ={this.handleChangePitanje} 
		    value={this.state.pitanje.description}
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
		{ this.state.pitanje.tipPitanja === "RESTRICTED" ?
		    <Grid item xs={5}>
			  <TextField
				className={classes.textField}
				id="newanswer"
				onChange={this.handleAnswerText}
				label="Odgovor"
				placeholder="Pondudjeni Odgovor"
				margin="normal"
				/>

			      <Add onClick={this.handleAddAnswer}  />
				  <div>
					{ this.state.pitanje.ponudjeni.map( (e)=>
									    <Chip onDelete={()=>this.handleDeleteAnswer(e)} label={e} key={e}/>)

					}
	          </div>
		  </Grid> : <div></div> }
	    </Grid>
		<Grid><Button onClick={this.handleDone}> Done </Button></Grid>
		</Grid>
		
	);
    }
});

