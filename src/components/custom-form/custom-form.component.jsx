import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(4),
      width: theme.spacing(60),
      height: theme.spacing(80),
    },
  },
}));

export default function CustomForm() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Paper>
        Form
      </Paper>
    </div>
  );
}
