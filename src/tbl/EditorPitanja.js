import React from 'react';
import { withStyles} from 'material-ui/styles';
import {Paper} from 'material-ui';
import NewPitanje from './NewPitanje';
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
	    pitanje: {
		decription: '',
		id: null,
		ponudjeniOdgovori: [],
		tipPitanja: "OPEN"
	    },
	    mode: "NEW"
	};
    }
    
    render(){
	const {classes} = this.props;
	let ele = <div>WWWW</div>;
	switch(this.state.mode) {
	case "NEW":
	    ele = <NewPitanje/>;
	    break;
	default:
	    ele = <div>Wrong mode</div>
	}
	console.log(ele);
	 return (
	    <Paper className={classes.root}>
	      {ele}
	    </Paper>
		
	);
    }
});
