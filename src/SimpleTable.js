import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  paper: {
    marginTop: theme.spacing.unit * 1,
    width: '100%'
  },
  table: {
    minWidth: 700,
  },
  checkCell:{
    margin: 50
    
  }
});



function  SimpleTable(props) {

  const {classes} = props
  return (
    <Paper className={classes.paper}>
    <Table className={classes.table}>
    <TableHead>
    <TableRow>
    <TableCell> {props.id_pitanja}</TableCell>
    { props.ponudjeni.map ( (item) => (
      <TableCell key={item}>{item}</TableCell>
    ))}
    
    </TableRow>
    </TableHead>
    <TableBody>
    
    <TableRow key={"od"}>
    <TableCell><Typography variant="subheading" >{props.tekst_pitanja}</Typography> </TableCell>
    {props.ponudjeni.map( n => {
      return (
        
              <TableCell key={n} className={classes.checkCell}  >
        <Checkbox             
        onChange={()=> props.kadOdgovori( props.id_pitanja, n ) }
        checked= {props.odgovor === n }
        value="checkedB"
        color="primary"
        
        
        />
                </TableCell>
               
            );
          })}
                   </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );

}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
