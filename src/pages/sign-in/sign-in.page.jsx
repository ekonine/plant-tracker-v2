import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signinText: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(2),
    width: theme.spacing(40),
    height: theme.spacing(28),
  },
  signinButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignIn() {
  const {push} = useHistory();

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.signinContainer}>
          <Typography variant="h5" className={classes.signinText}>
            Enter Credentials
          </Typography>
          <TextField label="Username"></TextField>
          <TextField label="Password"></TextField>
          <Button
            className={classes.signinButton}
            variant="contained"
            color="primary"
            onClick={() => push('/')}>
            Sign In
          </Button>
        </div>
      </Paper>
    </div>
  );
}
