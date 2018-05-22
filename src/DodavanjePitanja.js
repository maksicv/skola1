import React,{Component} from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,Paper} from 'material-ui';
import API from './api';
const styles = theme => ({
    root : {
    },
    paper: {
      padding: 10,
	margin: 50,
        flexGrow: 1,
	minHeight: 400,
	
    },
    top: {
	textAlign: 'center'
    }
});

export default withStyles(styles)(class DodavanjePitanja extends Component {
    constructor(props){
	super(props);
	console.log(props);
	this.state = {
	    pitanjaizankete: [],
	    editingAnketa: props.editingAnketa,
	};
    }
    componentDidMount(){
	API.getPitanjaIzAnkete(this.state.editingAnketa.id)
	    .then((data)=> {
		console.log(data);
	    });
    }
    render(){
	const {classes} = this.props;
	return (
	    <Paper className={classes.paper}>
	      <Grid container >
		<Grid className={classes.top} item xs={12}>
		  Anketa naslov
		</Grid>
		<Grid container>
		  <Grid item xs={6}>Levo</Grid>
		  <Grid item xs={6}>Desno</Grid>
		</Grid>
	      </Grid>
            </Paper>
	);
    }
});
