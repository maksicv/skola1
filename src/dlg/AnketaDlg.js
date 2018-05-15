import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin:5,
    padding: 10
    
  },
});


const empty = {
    title: '' ,
    description: '',
    mode: 'NEW'
};

export default withStyles(styles)(class AnketaDialog extends React.Component {
    constructor(props){
	super(props);
	this.state = empty;
    }
  handleChange=(e)=>{
    this.setState({[e.target.id]: e.target.value});
  };

  handleCancel=()=>{
    this.setState(empty);
  }
  handleClose=()=>{
    this.setState(empty);
  }
  handleOk=()=>{
    this.props.submitAnketa(this.state);
    this.setState(empty);
  }



      render() {
	  console.log(this.state);
	const title = this.state.mode === "NEW" ? "Nova anketa" : "Izmena";
    return (
      <div>
         <Dialog
          open={this.props.open}
          onClose={this.handleClose} 
          aria-labelledby="form-dialog-title"
          >
           <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Anketa je skup pitanja
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Naslov ankete"
              onChange={this.handleChange}
              value={this.state.title}
              type="text"
              fullWidth
              />
              <TextField
                margin="dense"
                id="description"
                label="Opis ankete"
                type="text"
                onChange={this.handleChange}
                value={this.state.description}
                fullWidth
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel}  color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk}  color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
})

