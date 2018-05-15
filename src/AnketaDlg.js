import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const empty = {
    title: '' ,
    description: '',
    mode: 'NEW'
};

export default class AnketaDialog extends React.Component {

    
  constructor(props){
      super(props);
      this.state = empty;

  };

  handleChange=(e)=>{
      this.setState(empty);
  };

  handleCancel=()=>{
    this.props.cancellogin();
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
              Molimo vas da se ulogujete pre nastavka rada
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
}

