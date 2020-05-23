import React from 'react'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
}));

export default function Home() {

  const classes = useStyles();  

  return(
    <div className={classes.root}>
      Placeholder for Home Page Data
    </div>
  );
}
