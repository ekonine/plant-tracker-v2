import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(4),
    width: theme.spacing(60),
    height: theme.spacing(80),
  },
  textBox: {
    margin: theme.spacing(1),
  },
  title: {
    margin: theme.spacing(1),
    fontSize: 24,
  },
}));

export default function CustomForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Add Plant</Typography>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              className={classes.textBox}
              id="plantSpecies"
              label="Species"
              defaultValue="Species"
            />
            <TextField
              className={classes.textBox}
              id="plantNickname"
              label="Nickname"
              defaultValue="Nickname"
            />
          </div>
        </form>
      </Paper>
    </div>
  );
}
