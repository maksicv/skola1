import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Paper} from 'material-ui';
import NewPitanje from './NewPitanje';
import ShowPitanje from './ShowPitanje';
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
	    mode: "SHOW",
	    
	};
	console.log(props);
    }

    onPreview=()=>{
	this.setState( { mode: "PREVIEW" });
    }


    componentWillReceiveProps=(props)=>{
	console.log(props.pitanje);
	this.setState({pitanje: props.pitanje});
    }
    
    
    addPitanje=(pitanje)=>{
	const pitPost = { description: pitanje.description,
			  id: null,
			  ponudjeniOdgovori: pitanje.ponudjeni.join(","),
			  tipPitanja: pitanje.tipPitanja  };
	API.postPitanje(pitPost).then((data)=>{
	    this.setState( { pitanje:  { description: data.description,
					   id: data.id,
					   ponudjeniOdgovori: data.ponudjeniOdgovori.split(","),
					   tipPitanja: data.tipPitanja} , mode: "SHOW" }  );
	});
    }
    render(){
	const {classes} = this.props;
	let ele = <div>WWWW</div>;
	switch(this.state.mode) {
	case "NEW":
	    ele = <NewPitanje addPitanje={this.addPitanje}  />;
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
	      {ele}
	    </Paper>
		
	);
    }
});
