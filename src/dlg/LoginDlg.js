import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class FormDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '' ,
      password: '' 
    };
  }

  handleChange=(e)=>{
    this.setState({[e.target.id]: e.target.value});
  }

  handleCancel=()=>{
    this.props.cancellogin();
    this.setState({username:'',password:''});
  }
  handleClose=()=>{
    this.setState({username:'',password:''});
  }
  handleLogin=()=>{
    this.props.login(this.state);
    this.setState({username:'',password:''});
  }



  render() {
    return (
      <div>
         <Dialog
          open={this.props.open}
          onClose={this.handleClose} 
          aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">Prijava</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Molimo vas da se ulogujete pre nastavka rada
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Korinicko ime"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
              fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Lozinka"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
                fullWidth
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleLogin}  color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


