import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
}));

export default function SignIn() {

  const classes = useStyles(); 

  return(
    <div className={classes.root}>
      SignIn Page
    </div>
  );
}
