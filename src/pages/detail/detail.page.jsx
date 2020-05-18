import React from 'react';
import {makeStyles} from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper';

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: '30px',
      width: theme.spacing(60),
      height: theme.spacing(80),
    },
  },
}));

export default function Detail() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Paper className={classes.paper}/>
    </div>
  );
}
