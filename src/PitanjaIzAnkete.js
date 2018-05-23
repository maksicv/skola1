import React,{Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Grid,Paper,GridList,GridListTile,ListSubheader } from 'material-ui';
import Remove from '@material-ui/icons/Remove';
import Search from './Search';

const styles = theme => ({
    root :{
	
    }
});

export default withStyles(styles)(class PitanjaIzAnkete extends Component {
    render(){
	console.log(this.props);
	const {classes} = this.props;
	return (
	    <div className={classes.root}>
	      <GridList cellHeight={30} className={classes.gridList}>
		<GridListTile key="Subheader2" cols={2} style={{ height: 'auto' }}>
		  <ListSubheader component="div">
		    <Search searchFun={this.props.onSearch} />
		  </ListSubheader>
		 </GridListTile>
		{ this.props.pitanja.map( (pitanje)=>{

		    return (<GridListTile className={classes.pitanja} cols={2} key={pitanje.pitanje.id}>
			     <Paper className={classes.paper}>
				   <Grid container>
					 <Grid item style={{flexGrow:1}}>
					       {pitanje.pitanje.description}
					  </Grid>
					 <Grid item>
					       <Remove onClick={()=>this.props.izbaciPitanje(pitanje.pitanje)}/>
					  </Grid>
				       </Grid>
				 </Paper>
			    </GridListTile>);
		     }
				    )}
	      </GridList>
	    </div>
	);
    }
});
				  
