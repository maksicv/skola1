import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardActions,CardContent,Button,Card,Typography,Grid,Paper } from 'material-ui';
import {TextField} from 'material-ui';

import Add from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';

import API from '../api';
import Search from '../Search';


const styles = theme => ({
    root: {
    },
    paper: {
	padding: 10,
	margin: 50,
	flexGrow: 1
    },
    mainPaper: {
	marginTop: 10,
	flexGrow: 1,
    },
    card: {
    minWidth: 275,
    },
    bullet: {
	display: 'inline-block',
	margin: '0 2px',
	transform: 'scale(0.8)',
    },
    title: {
	marginBottom: 16,
	fontSize: 14,
    },
    pos: {
	marginBottom: 12,
    },
});

export default withStyles(styles)(class Pitanja extends Component {

    constructor(props){
	super(props);
	this.state = {
	    pitanja: [],
	    selected: {},
	    mode: "NONE",
	    search: '',
	    page: 0,
	    rowPerPage: 20,
	    openDlg: false,
	};
    }

    
    refresh=(page)=>{
	API.getAnkete(page, this.state.rowsPerPage)
	    .then( (data) => {  this.setState({ page: page, totalElements: data.totalElements,totalPages: data.totalPages, data: data.content});});
    }
    

    onSearch=(searchTerm)=>{
	alert(searchTerm);
    }

    addPitanje=()=>{
	this.setState({openDlg: true});
    }
    
    render (){
	const {classes} = this.props;
	return (
	    <Paper className={classes.paper}>
	      <Grid container  >
		<Grid container>
		  <Grid item style={{flexGrow: 1}} >
		    <Search searchFun={this.onSearch} />
		  </Grid>
		  <Grid>
		    <Add onClick={this.addPitanje} color="primary" />
		  </Grid>
                </Grid>
		
		<Grid className={classes.mainPaper} xs={12}  item>

		</Grid>
	      </Grid>
            </Paper>
	);
    }
});




                 
  
