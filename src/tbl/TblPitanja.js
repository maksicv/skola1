import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Typography,Grid } from 'material-ui';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableCell';
import TableFooter from 'material-ui/Table/TableFooter';
import TablePagination from 'material-ui/Table/TablePagination';
import TableRow from 'material-ui/Table/TableRow';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

import API from '../api';

const actionsStyles = theme => ({
  root: {
      flexShrink: 0,
      padding: 10,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
  },
});


class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
	this.props.onChangePage(event, 0);
    };
    
    handleBackButtonClick = event => {
	this.props.onChangePage(event, this.props.page - 1);
    };
    
    handleNextButtonClick = event => {
	this.props.onChangePage(event, this.props.page + 1);
    };
    
    handleLastPageButtonClick = event => {
	this.props.onChangePage( event, Math.floor(this.props.count / this.props.rowsPerPage)  );
    };
    
    render() {
	const { classes, totalPages, page,  theme } = this.props;
      
	return (
	    <div className={classes.root}>
              <IconButton
		onClick={this.handleFirstPageButtonClick}
		disabled={page === 0}
		aria-label="First Page"
		>
		{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
              </IconButton>
              <IconButton
		onClick={this.handleBackButtonClick}
		disabled={page === 0}
		aria-label="Previous Page"
		>
		{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </IconButton>
              <IconButton
		onClick={this.handleNextButtonClick}
		disabled={page >= totalPages  }
		aria-label="Next Page"
		>
		{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </IconButton>
              <IconButton
		onClick={this.handleLastPageButtonClick}
		disabled={page >= totalPages }
		aria-label="Last Page"
		>
		{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
              </IconButton>
	    </div>
	);
    }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
      minWidth: 500,
      padding: 10
  },
  tableWrapper: {
      overflowX: 'auto',
      margin: 10,
  },
});

class TblPitanja extends React.Component {
    constructor(props, context) {
	super(props, context);
	this.state = {
	    data: [] ,
	    openEdit:false,
	    edit: {},
	    head: ["id","Pitanje","Tip","Opcije"],
	    page: 0,
	    rowsPerPage: 5,
	    totalElements: 0,
	    totalPages : 0
	};
    }


  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
   

    return (
	<Paper className={classes.root}>
	  <Typography variant="display1">
	    TblPitanja
	  </Typography>  
          <Paper className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableBody>
		<TableRow key={"0"}>
		  {this.state.head.map( n => {
                      return (
			  
			  <TableCell key ={n} component="th" scope="row">
			    <Typography variant="title" >{n} </Typography>
			  </TableCell>
			  
                      );
		  })}
	                  <TableCell>
	                         <IconButton onClick={this.addAnketa} aria-label="Dodaj anketu">
  	    <Add color="primary" onClick = {this.onAdd}/>
                 	          </IconButton>
  	                 </TableCell>
        
 	      </TableRow>
            { this.state.data.map( (anketa) => (
		
                <TableRow key={anketa.id}  style={{ height: 48 }}>
                  <TableCell > {anketa.id}  </TableCell>
		  <TableCell > {anketa.title} </TableCell>
		  <TableCell > {anketa.description} </TableCell>
		  <TableCell>
		    <Grid container>
		    <Grid item>
		    <IconButton aria-label="Brisanje ankete">
  	              <Delete color="secondary" onClick = { ()=> { this.onDelete(anketa.id);  }  }/>
                    </IconButton>
		    <IconButton  aria-label="Izmeni anketu">
  	              <Edit color="primary" onClick = {() => this.onEdit({title: anketa.title,id: anketa.id,description: anketa.description} )}/>
                    </IconButton>
		    </Grid>
		    </Grid>
		  </TableCell>
                </TableRow>
            ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count = {this.state.totalElements}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
            </Paper>
	    <AnketaDlg anketa={this.state.edit} submitAnketa={this.submitAnketa}  open={this.state.openEdit} />      
      </Paper>
    );
  }
}

TblPitanja.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TblPitanja);
