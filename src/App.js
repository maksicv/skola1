import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Paper, Grid} from 'material-ui';
import Header from './Header'
import Levo from './Levo'
import Desno from './Desno'
import Pitanje from './Pitanje'



class App extends Component {
	constructor(){
		super ()
		this.state={
			user:{name:'Test', image:'alex.jpg'},
			anketa: { id_ankete: 44,
                       naziv_ankete: 'Prva anketa',
                      pitanja: [
					  {id:1, 
					   tekst_pitanja:'Nastavni istice cilj casa', 
					    type:'Open', 
						ponudjeni:['lose','dobro', 'bolje', 'sasvim'] , 
						odgovor:""},
					  {id:2, tekst_pitanja:'Nastavnik prilagodjava nastavu potrebama ucenika', type:'Open', ponudjeni:['lose','dobro', 'bolje', 'sasvim'], 
					  odgovor:""},
					  {id:3, tekst_pitanja:'Nastavnik podstice grupni rad', type:'Open', ponudjeni:['lose','dobro', 'bolje', 'sasvim'] ,
					  odgovor:""}
					  ]

	}} }
    kadOdgovori = ( idpitanja, odgovor ) =>{
		 console.log(idpitanja);
		 this.setState( (prevState)=> {
			const ret = Object.assign(prevState,{anketa: Object.assign(prevState.anketa,
			{ pitanja: prevState.anketa.slice()})})
			console.log(ret);
			return ret;	
		 }
		 );
    }
  render() {
    return (
     
	 <Grid container>
		<Grid item xs={12}>
          <Header user={this.state.user}/>
		  </Grid>  
        
		<Grid container>
          <Levo ime={this.state.user.name} anketa={this.state.anketa.naziv_ankete} />
		  <Desno kadOdgovori ={this.kadOdgovori} celaAnketa={this.state.anketa}/>

		  </Grid>  
      </Grid>
	  
    );
  }
}

export default App;
