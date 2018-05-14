import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Paper, Grid} from 'material-ui';
import ListaPitanja from './ListaPitanja'
import Ankete from './Ankete.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin:5,
    padding: 10
        
  },
});
function Odgovoranje(props){
    console.log(props);
        const { classes } = props;
        return(
          <Grid item xs={12}>
          <Paper className = {classes.paper}>
          <Typography variant="display1" gutterBottom>
             {props.celaAnketa.naziv_ankete}
      </Typography>
          
          <ListaPitanja kadOdgovori ={props.kadOdgovori} pitanja={props.celaAnketa.pitanja}/>
        
        

        </Paper>
        </Grid>
        )
}

Odgovoranje.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Odgovoranje);
