import React,{Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Grid,Paper,GridList,GridListTile,ListSubheader } from 'material-ui';

import Add from '@material-ui/icons/Add';
import Search from './Search';

const styles = theme => ({
    root :{
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	overflow: 'hidden',
	backgroundColor: theme.palette.background.paper

    },
    gridList: {
	
    },
    pitanja: {
	margin: 10
    },
    icon: {
	color: 'rgba(255, 255, 255, 0.54)',
    }
});

export default withStyles(styles)(class PitanjaVanAnkete extends Component {
    constructor(props){
	super(props);
	this.state ={
	    selectedId: null,
	    searchTerm: ''
	};
    }
    render(){
	console.log(this.props);
	const {classes} = this.props;
	return (
	    <div className={classes.root}>
	      <GridList cellHeight={30} className={classes.gridList}>
		<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
		  <ListSubheader component="div">
		    <Search searchFun={this.props.onSearch} />
		  </ListSubheader>
		 </GridListTile>
		 { this.props.pitanja.map( (pitanje)=>{
		     return (<GridListTile className={classes.pitanja} cols={2} key={pitanje.id}>
			     <Paper className={classes.paper}>
				   <Grid container>
					 <Grid item style={{flexGrow:1}}>
					       {pitanje.description}
					  </Grid>
					 <Grid item>
					       <Add onClick={()=>this.props.dodajPitanje(pitanje)}/>
					  </Grid>
				       </Grid>
				 </Paper>
			     </GridListTile>)
		     }
				    )}
	      </GridList>
	    </div>
	);
    }
});
				  
