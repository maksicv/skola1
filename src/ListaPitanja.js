import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';






import { Grid} from 'material-ui';
import Pitanje from './Pitanje'

import List from 'material-ui/List';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function ListaPitanja(props){
        const { classes } = props;
        const dense=false;
        
        return(


<Grid container spacing={16}>
          <Grid item xs={12} md={12}>
            
            <div className={classes.demo}>
              <List dense={dense}>
                                  { props.pitanja.map( (item)=> (
                                  <Pitanje key={item.id}  kadOdgovori ={props.kadOdgovori}  pitanje={item}/>
                  
                                  ))}
                
              </List>
            </div>
          </Grid>
         
        </Grid>
)}
                
ListaPitanja.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ListaPitanja);
