import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  paper: {
    margin: theme.spacing(2),
    width: theme.spacing(60),
    height: theme.spacing(45),
  },
  textBox: {
    margin: theme.spacing(1),
  },
  numberBox: {
    margin: theme.spacing(1),
    width: '15ch',
  },
  title: {
    margin: theme.spacing(2),
    fontSize: 24,
  },
  button: {
    marginTop: theme.spacing(2),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' 
  }
}));

export default function CustomForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained" color="primary">
        Back to Manage List
      </Button>
      <Paper className={classes.paper}>
        <form className={classes.formContainer} noValidate autoComplete="off">
        <Typography className={classes.title}>
          Add a new plant to your collection
        </Typography>
          <div>
            <TextField
              className={classes.textBox}
              id="plantSpecies"
              label="Species"
              variant="standard"
            />
            <TextField
              className={classes.textBox}
              id="plantNickname"
              label="Nickname"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              className={classes.textBox}
              id="plantHouseLoc"
              label="Where is the plant kept?"
              variant="standard"
            />
            <TextField
              className={classes.textBox}
              id="plantBoughtLoc"
              label="Where did you buy the plant?"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              className={classes.numberBox}
              id="plantPrice"
              label="Cost"
              variant="standard"
            />
            <TextField
              className={classes.numberBox}
              id="plantPriceCurr"
              label="(CAD, USD)"
              variant="standard"
            />
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary">
            Add plant!
          </Button>
        </form>
      </Paper>
    </div>
  );
}
