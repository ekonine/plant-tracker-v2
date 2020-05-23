import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  large: {
    marginTop: theme.spacing(2),
    height: theme.spacing(40),
    width: theme.spacing(40)
  },
  small: {
    marginTop: theme.spacing(2),
    height: theme.spacing(20),
    width: theme.spacing(40)
  },
  text: {
    marginTop: theme.spacing(2)
  }
}));

export default function Home() {

  const classes = useStyles();  

  return(
    <div className={classes.root}>
      <Typography variant="h5" className={classes.text}>Dashboard</Typography>
      <Paper className={classes.small} elevation={3}>
      </Paper>
      <Paper className={classes.large} elevation={3}>
      </Paper>
      <Paper className={classes.small} elevation={3}>
      </Paper>
    </div>
  );
}
