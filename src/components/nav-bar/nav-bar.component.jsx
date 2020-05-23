import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuContainer: {
    marginTop: theme.spacing(5),
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  signinLink: {
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            className={classes.menuContainer}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <Link className={classes.link} to="/">
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
            </Link>
            <Link className={classes.link} to="/manage">
              <MenuItem onClick={handleClose}>Manage</MenuItem>
            </Link>
            <Link className={classes.link} to="/logs">
              <MenuItem onClick={handleClose}>Logs</MenuItem>
            </Link>
            <Link className={classes.link} to="/">
              <MenuItem onClick={handleClose}>Sign Out</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            House Plant Tracker
          </Typography>
          <Link className={classes.signinLink} to="/signin">
            <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
