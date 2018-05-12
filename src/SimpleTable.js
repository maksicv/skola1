import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell> {props.id_pitanja}</TableCell>
			{ props.ponudjeni.map ( (item) => (
               <TableCell numeric>{item}</TableCell>
			))}
			
          </TableRow>
        </TableHead>
        <TableBody>
		 
		  <TableRow key={"od"}>
		  <TableCell>{props.tekst_pitanja}</TableCell>
          {props.ponudjeni.map( n => {
            return (
             
                <TableCell >
                  <Checkbox
					onChange={()=> props.kadOdgovori( props.id_pitanja, n ) }
					
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