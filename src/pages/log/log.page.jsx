import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LogTable from '../../components/log-table/log-table.component.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
}));

export default function Logs() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <LogTable />
    </div>
  );
}
