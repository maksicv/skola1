import React,{Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Grid,TextField} from 'material-ui';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    root: {
    }
});

export default withStyles(styles)(class Search extends Component {
    constructor(props){
	super(props);
	this.state ={
	    search: ''
	};
    }

    handleChange= (e)=>{
	this.setState({search: e.target.value});
    }

    handleSearch =()=>{
	this.props.searchFun(this.state.search);
    }
    
    handleKeyPress=(e)=>{
	if(e.key == 'Enter'){
	    this.props.searchFun(this.state.search);
	}
    }
    
    render(){
	return (
	    <Grid style={{flexGrow: 1}} xs={10} item>
	      <Grid container spacing={8} alignItems="flex-end">
		<Grid  item>
		  <SearchIcon onClick={this.handleSearch} />
		</Grid>
		<Grid item>
		  <TextField id="input-with-icon-grid"
			     label="Pretraživanje pitanja"
			     onKeyPress={this.handleKeyPress}
			     onChange={this.handleChange}
			     value={this.state.search} />
		</Grid>
	      </Grid>
	    </Grid>
	);
    }
});
