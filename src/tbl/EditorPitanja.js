import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Paper,Grid} from 'material-ui';
import NewPitanje from './NewPitanje';
import ShowPitanje from './ShowPitanje';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Done from '@material-ui/icons/Done';

import API from '../api';
const styles = theme => ({
    root: {
	flexGrow: 1,
	minHeight: 100
    }
});


export default withStyles(styles)(class EditorPitanja extends React.Component {
    constructor(props){
	super(props);

 	this.state = {
	    pitanje: props.pitanje,
	    mode: props.pitanje.id ? "SHOW" : "EDIT" ,
	    answer: "",

	};

    }

    onPreview=()=>{
	if (this.state.mode !== "PREVIEW" ) {
	    this.setState( { mode: "PREVIEW" });
	} else {
	    this.setState( { mode: "SHOW" });
	}
    }

    edit=(id)=>{
	this.setState( {mode: "EDIT"});
    }

    done=()=> {
	this.setState( {mode:"SHOW"});
	this.props.editPitanje(this.state.pitanje);
    }
    
    
    addPitanje=()=>{
	const pitPost = { description: this.state.pitanje.description,
			  id: this.state.pitanje.id,
			  ponudjeniOdgovori: this.state.pitanje.ponudjeniOdgovori.join(","),
			  tipPitanja: this.state.pitanje.tipPitanja  };

	API.postPitanje(pitPost).then((data)=>{
	    this.setState( { pitanje:  { description: data.description,
					   id: data.id,
					   ponudjeniOdgovori: data.ponudjeniOdgovori.split(","),
					   tipPitanja: data.tipPitanja} , mode: "SHOW" }  );
	});
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

    handleAnswerText=(e) =>{
	const answer = e.target.value;
	this.setState({answer: answer });
    }

    handleAddAnswer=(e)=>{
	this.setState((prevState)=>{
	    const newPonudjeni = [ ...prevState.pitanje.ponudjeniOdgovori,prevState.answer];
	    const newPitanje =  Object.assign({},
					      prevState.pitanje,
					      {ponudjeniOdgovori: newPonudjeni})
	    ;
	    return{ pitanje: newPitanje, answer:""};
	    
	});
    }

    handleDeleteAnswer=(answer)=>{
	this.setState((prevState)=>{
	    const newPonudjeni = prevState.pitanje.ponudjeni.filter( (a)=>{return answer !== a });
	    const newPitanje = Object.assign({},prevState.pitanje, {ponudjeni: newPonudjeni} );
	    return { pitanje: newPitanje};
	});
    } 

    
    render(){
	const {classes} = this.props;
	let ele = <div>WWWW</div>;
	switch(this.state.mode) {
	case "NEW":
	    ele = <NewPitanje addPitanje={this.addPitanje}  />;
	    break;
	case "EDIT":
	    ele = <NewPitanje handleChangePitanje={this.handleChangePitanje}
                              addPitanje={this.addPitanje}
                              handleDeleteAnswer={this.handleDeleteAnswer} 
	                      handleAddAnswer={this.handleAddAnswer}
                              handleAnswerText={this.handleAnswerText}
   	                      handleChangeTipPitanja={this.handleChangeTipPitanja}
	                      pitanje={this.state.pitanje}  />;
	    break;
	case "SHOW":   
            ele = <ShowPitanje preview = {false} onPreview={this.onPreview}  onDelete={this.props.deletePitanje}  pitanje={this.state.pitanje} />;
	    break;
	case "PREVIEW":   
            ele = <ShowPitanje preview = {true}  onPreview={this.onPreview}  onDelete={this.props.deletePitanje}  pitanje={this.state.pitanje} />;
	    break;
	default:
	    ele = <div>Wrong mode</div>;
	}
	 return (
	     <Paper className={classes.root}>
	       <Grid container>
		 <Grid item style={{flexGrow:1}} >
		   {ele}
		 </Grid>
		 <Grid item style={{margin: 3}} >
		   { this.state.mode === "EDIT" ?  <Done onClick={()=> this.addPitanje() } /> :  <Edit onClick={ ()=> { this.edit(this.state.pitanje.id); } }   /> }
		    <Delete onClick={ ()=> this.props.deletePitanje(this.state.pitanje.id)  }  />
        	    <RemoveRedEye onClick={ ()=> this.onPreview(this.state.pitanje.id)}  />

		 </Grid>
		 
	       </Grid>
	    </Paper>
		
	);
    }
});
