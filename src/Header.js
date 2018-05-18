import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import {Button} from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
    
    const { classes,menuOptions} = props;

    return (
	<div className={classes.root}>
	  <AppBar position="static">
            <Toolbar>
              <IconButton onClick={(e)=>props.onMenuClick(e)}  className={classes.menuButton} color="inherit" aria-label="Menu">
		<MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
		Škola
              </Typography>
	      { props.logged ? 
		  <span><Typography>{props.user.username}</Typography><Avatar src={props.user.image}/></span>  : <Button onClick={props.onLoginButton} color="inherit">Login</Button>
		  }
            </Toolbar>
	  </AppBar>
	  <Menu
            id="lock-menu"
            anchorEl={props.anchorEl}
            open={Boolean(props.anchorEl)}
            >
            { menuOptions.map((option, index) => (
		<MenuItem
		  key={option.mode}
		  onClick={event => props.handleMenuItemClick(event, index)}	  
		  >
		  {option.tekst}
		</MenuItem>
            ))}
        </Menu>
	    </div>
    );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
