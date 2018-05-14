import React, { Component } from 'react';
import { Grid} from 'material-ui';
import Header from './Header';
import Desno from './Desno';
import Unloged from './Unloged';
import LoginDlg from './LoginDlg';

const userimage = 'alex.jpg';

class App extends Component {
  constructor(){
    super ();
    this.state={
      openLogin: false,
      user: {},
	 // user:{name:'Test', image:'alex.jpg'},
      anchorEl: null,
      logged: false,
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
                
              }
    }
  };

  menuClick=(e)=>{
    alert("menuClick");
  }
  
  cancellogin=()=>{
    this.setState({openLogin: false});
  }

  login= ( {username,password})=>{
    this.setState({openLogin: false});
    this.setState({logged: true, user: { username: username, image:userimage} })
  }
  
  onLoginButton=()=>{
    this.setState({openLogin: true});
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
    console.log(this.state.user);
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Header menuClick={this.menuClick}
                    anchorEl={this.state.anchorEl}
                    onLoginButton={this.onLoginButton}
                    logged = {this.state.logged}
                    user={this.state.user}/>
          </Grid>  

          <Grid container>
            { !this.state.logged   ? <Unloged/> : 
              <Desno kadOdgovori ={this.kadOdgovori} celaAnketa={this.state.anketa}/>
              }
          </Grid>  
        </Grid>
        <LoginDlg cancellogin={this.cancellogin}
                  login={this.login}
                  open={this.state.openLogin} />      
    </div>
    );
  }
}

export default App;
