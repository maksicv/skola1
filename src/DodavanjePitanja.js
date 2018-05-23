import React,{Component} from 'react';
import { withStyles} from 'material-ui/styles';
import {Grid,Paper,Typography} from 'material-ui';
import PitanjaVanAnkete from './PitanjaVanAnkete';
import PitanjaIzAnkete from './PitanjaIzAnkete';
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
	this.state = {
	    pitanjaizankete: [],
	    pitanjavanankete: [],
	    editingAnketa: props.editingAnketa,
	};
    }

    dodajPitanje=(pitanje)=>{
	console.log(pitanje);
	API.dodajPitanje(this.state.editingAnketa.id,pitanje.id,1)
	    .then(()=> this.setState( (prevState)=> {
		return { pitanjavanankete : prevState.pitanjavanankete.filter((p)=>{ return p.id !== pitanje.id;}),
			 pitanjaizankete: [...prevState.pitanjaizankete, { pitanje: pitanje,redniBroj: 1 } ]
		       };
	    }));
    }
    
    onSearchLeft=(search)=>{
	API.getPitanjaVanAnkete(this.state.editingAnketa.id,search)
	    .then( (data)=> this.setState({pitanjavanankete: data}));
    }

    onSearchRight=(search)=>{
	API.getPitanjaIzAnkete(this.state.editingAnketa.id,search)
	    .then( (data)=> this.setState({pitanjaizankete: data}));
    }

    izbaciPitanje=(pitanje)=>{
	API.dodajPitanje(this.state.editingAnketa.id,pitanje.id,1)
	    .then(()=> this.setState( (prevState)=> {
		return { pitanjaizankete : prevState.pitanjaizankete.filter((p)=>{ return p.pitanje.id !== pitanje.id;}),
			 pitanjavanankete: [...prevState.pitanjavanankete, { pitanje: pitanje } ]
		       };
	    }));
	 
    }
    componentDidMount(){
	let pitanjaizankete = null;
	let pitanjavanankete = null;
	API.getPitanjaIzAnkete(this.state.editingAnketa.id)
	    .then((data)=> {
		pitanjaizankete = data;
		return API.getPitanjaVanAnkete(this.state.editingAnketa.id);
	    })
	    .then((d1)=>{
		pitanjavanankete = d1;
	    })
	    .then( ()=>{
		
		console.log(pitanjavanankete);
		console.log(pitanjaizankete);
		
		this.setState({pitanjavanankete: pitanjavanankete,
			       pitanjaizankete:  pitanjaizankete});
	    });
	
    }
    render(){
	const anketa = this.props.editingAnketa;
	console.log(this.props);
	console.log(anketa);
	const {classes} = this.props;
	return (
	    <Paper className={classes.paper}>
	      <Grid container >
		<Grid className={classes.top} item xs={12}>
		  <Typography variant="title" >
		    {anketa.title}
		  </Typography><br/>
		  <Typography variant="subheading" >
		    {anketa.description}
		  </Typography><br/>
		  
		</Grid>
		<Grid container>
		  <Grid item xs={6}>
		    <Paper className={classes.paper}>
		      <PitanjaVanAnkete onSearch={this.onSearchLeft} dodajPitanje={this.dodajPitanje} pitanja={this.state.pitanjavanankete} />
		    </Paper>
 		  </Grid>
		  <Grid item xs={6}>
		    <Paper className={classes.paper}>
		      <PitanjaIzAnkete izbaciPitanje={this.izbaciPitanje} pitanja={this.state.pitanjaizankete} />
		    </Paper>
		  </Grid>
		</Grid>
	      </Grid>
            </Paper>
	);
    }
});
