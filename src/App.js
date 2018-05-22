import React, { Component } from 'react';
import { Grid} from 'material-ui';
import Header from './Header';
import Desno from './Desno';
import Unloged from './Unloged';
import 'typeface-roboto';
import API from './api';
import Keycloak from 'keycloak-js';

const userimage = 'alex.jpg';

const keycloak = Keycloak();

class App extends Component {
    constructor(){
	super ();
	this.state={
	    openLogin: false,
	    keycloack: null,
	    user: null,
	    logged: false,
	    anchorEl: null,
	    menuOptions : [ {  tekst:  "Uredjivanje ankete", mode: "UREDJIVANJE_ANKETE"}  ,
	                    { tekst: "Pitanja", mode: "PITANJA"},
			    { tekst: "Odgovoranje", mode: "ODGOVORANJE"}],
	    mode: "UREDJIVANJE_ANKETE",
	    editingAnketa: null,
	    anketa: { id_ankete: 44,
                      naziv_ankete: 'Prva anketa',
                      pitanja: [
			  {id:1, 
			   tekst_pitanja:'Nasererer', 
			   type:'Open', 
			   ponudjeni:['lose','dobro', 'bolje', 'sasvim'] , 
			   odgovor:""},
			  {id:2,
			   tekst_pitanja:'Nastavnik prilagodjava nastavu potrebama ucenika',
			   type:'Closed',
			   ponudjeni:['lose','dobro', 'bolje', 'sasvim'], 
			   odgovor:""},

			  {id:3,
			   tekst_pitanja:'Nastavnik podstice grupni rad',
			   type:'Closed',
			   ponudjeni:['lose','dobro', 'bolje', 'sasvim'] ,
			   odgovor:""}
                      ]
		    }
	};
    };
    
    
    onMenuClick=(e)=>{
	this.setState( { anchorEl: e.target });
    }
    dodajPitanja=(anketa)=>{
	this.setState({mode: "DODAVANJE_PITANJA",editingAnketa: anketa });
    }
    handleMenuItemClick=(e,index)=>{
  	this.setState( (prevState) =>  {
	    const newMode  = prevState.menuOptions[index].mode;
	    if ( prevState !== 'UREDJIVANJE_ANKETE' && newMode ===  'UREDJIVANJE_ANKETE'  ){
		API.getAnkete()
		    .then((data)=> this.setState({mode: newMode, ankete: data , anchorEl: null}));
	    };
 	    if ( prevState !== 'ODGOVORANJE' && newMode ===  'ODGOVORANJE'  ) {
		API.getAnkete()
		    .then((data)=> this.setState({mode: newMode, ankete: data , anchorEl: null}));
	    };
	    if ( prevState !== 'PITANJA' && newMode ===  'PITANJA'  ) {
		return {mode: newMode, ankete: [] , anchorEl: null};
	    };
	    return null;
	});
    }
 
  
  cancellogin=()=>{
    this.setState({openLogin: false});
  }

  login=(authenticated)=>{
      alert("Login");
  }
  
  onLoginButton=()=>{
      this.login();
  }

 componentDidMount=()=>{
     keycloak.init().success( auth => {
	 auth ? keycloak.loadUserInfo().then((data)=> { API.setKeycloak(keycloak);
							this.setState({logged: true ,
								       user: {image: userimage,
									      username: data.preferred_username,token:keycloak.token }} );
							 } ) : keycloak.login();
     });
     
    }
    
  kadOdgovori = ( idpitanja, odgovor ) =>{
    this.setState( (prevState)=> {
      const oldPitanje = Object.assign({},...prevState.anketa.pitanja.filter( (pitanje)=>{ return idpitanja === pitanje.id}),{odgovor: odgovor} )
      const ret = Object.assign(prevState,
                                {anketa: Object.assign(prevState.anketa,
                                                       { pitanja: [...prevState.anketa.pitanja.filter((pitanje)=>{return idpitanja !== pitanje.id }), oldPitanje ].sort ( (p1,p2)=>{ return p1.id-p2.id} ) }
 )})
      
      return ret;     
    }
                 );
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Header mode= {this.state.mode}
	            onMenuClick={this.onMenuClick}
                    anchorEl={this.state.anchorEl}
                    onLoginButton={this.onLoginButton}
                    logged = {this.state.logged}
		    handleMenuItemClick = {this.handleMenuItemClick}
		    menuOptions={this.state.menuOptions}
                    user={this.state.user}/>
          </Grid>  

          <Grid container>
            { !this.state.logged   ? <Unloged/> : 
		<Desno editingAnketa={this.state.editingAnketa} mode= {this.state.mode} dodajPitanja={this.dodajPitanja} kadOdgovori ={this.kadOdgovori} celaAnketa={this.state.anketa}/>
		}
          </Grid>  
        </Grid>
      </div>
    );
  }
}


export default App;
