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
  },
  paper: {
    margin: theme.spacing(4),
    width: theme.spacing(60),
    height: theme.spacing(80),
  },
  textBox: {
    margin: theme.spacing(1),
  },
  numberBox: {
    margin: theme.spacing(1), 
    width: '15ch'
  },
  title: {
    margin: theme.spacing(2),
    fontSize: 24,
  },
  button: {
    textAlign: 'center',
    //One of these days I'll understand how flexbox works
    marginTop: theme.spacing(15)
  }
}));

export default function CustomForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Add a new plant to your collection</Typography>
        <form noValidate autoComplete="off">
          <div className={classes.root}>
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
          <div className={classes.root}>
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
          <div className={classes.root}>
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
        </form>
        <div className={classes.button}>
        <Button variant="contained" color="primary">
          Add plant!
        </Button>
          </div>
      </Paper>
    </div>
  );
}
