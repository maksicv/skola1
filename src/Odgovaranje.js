import React,{Component}  from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Paper, Grid} from 'material-ui';
import ListaPitanja from './ListaPitanja';
import API from './api';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin:5,
    padding: 10
        
  },
});

export default withStyles(styles)(class Odgovoranje extends Component {
    constructor(props){
	super(props);
	this.state= {
	    pitanja: []
	};
    }
    
    componentDidMount=()=>{
	API.getPitanjaIzAnkete(1).then((data)=> this.setState({pitanja:data}));
    }
	
    render() {
	const {classes} = this.props;
        return(
          <Grid item xs={12}>
          <Paper className = {classes.paper}>
          <Typography variant="display1" gutterBottom>
             {this.props.celaAnketa.naziv_ankete}
      </Typography>
          
          <ListaPitanja kadOdgovori ={this.props.kadOdgovori} pitanja={this.state.pitanja}/>
        
        

        </Paper>
        </Grid>
        );
    }
});
