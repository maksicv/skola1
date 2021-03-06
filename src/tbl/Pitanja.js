import React,{Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Grid,Paper } from 'material-ui';

import Add from '@material-ui/icons/Add';

import API from '../api';
import Search from '../Search';
import EditorPitanja from './EditorPitanja';

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
	    searchTerm: '',
	    page: 0,
	    rowsPerPage: 30
	};
	
    }

    
    refresh=(page,searchTerm)=>{
	API.getPitanja(page, this.state.rowsPerPage,searchTerm)
	    .then( (data) => {
		const pitanja = data.content.map( ( pit )=>{
		    return { description: pit.description , id: pit.id, tipPitanja: pit.tipPitanja, ponudjeniOdgovori: pit.ponudjeniOdgovori ?  pit.ponudjeniOdgovori.split(",") : [] };});
		this.setState({ page: page, totalElements: data.totalElements,totalPages: data.totalPages, pitanja: pitanja});});
    }

    deletePitanje=(id)=>{
	API.deletePitanje(id)
        .then(this.refresh(this.state.page));
    }

    
    componentDidMount(){
	this.refresh(this.state.page);
    }

    onSearch=(searchTerm)=>{
	this.setState({searchTerm: searchTerm});
	this.refresh(this.state.page,searchTerm);
    }

    editPitanje=(pit)=>{
	const pitanje = {description: pit.description , id: pit.id, tipPitanja: pit.tipPitanja, ponudjeniOdgovori: pit.ponudjeni};
	API.postPitanje(pitanje).then( ()=> this.refresh(this.state.page,this.state.searchTerm));
    }
    addPitanje=()=>{
	this.setState((prevState)=> {
	    return { pitanja: [ { description: "", id: null, tipPitanja: "OPEN", ponudjeniOdgovori:[] }, ...prevState.pitanja]};
	});
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
		  { this.state.pitanja.map( (pitanje)=> {
		      console.log(pitanje);
		      return <EditorPitanja     onPreview={this.previewPitanje}
						deletePitanje={this.deletePitanje}
						editPitanje={this.editPitanje}
						key= {pitanje.id}  pitanje={pitanje}/>; }
				    )}
		</Grid>
	      </Grid>
            </Paper>
	);
    }
});




                 
  
