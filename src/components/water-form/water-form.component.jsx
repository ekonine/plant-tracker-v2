import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(2),
    width: theme.spacing(60),
    height: theme.spacing(44),
  },
  textBox: {
    margin: theme.spacing(1),
    width: '45ch',
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
}));

export default function WaterForm({user}) {
  const classes = useStyles();
  const {push} = useHistory();
  const [units, setUnits] = React.useState('');

  const handleUnitSelect = event => {
    setUnits(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => {
        push(`/manage/${user}`)
      }}>
        Back to Manage List
      </Button>
      <Paper className={classes.paper}>
        <form noValidate autoComplete="off">
          <div className={classes.root}>
            <Typography className={classes.title}>
              Add watering details
            </Typography>
            <div className={classes.col}>
              <TextField
                className={classes.numberBox}
                id="waterAmount"
                label="Amount"
                variant="standard"
              />
              <FormControl className={classes.numberBox}>
                <InputLabel id="units">Units</InputLabel>
                <Select
                  labelId="units"
                  id="waterUnits"
                  value={units}
                  variant="standard"
                  onChange={handleUnitSelect}>
                  <MenuItem value={'ml'}>ml</MenuItem>
                  <MenuItem value={'oz'}>oz</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField
              className={classes.textBox}
              id="fertilizerNpk"
              label="Did you use fertilizer? (input N-P-K i.e 10-10-10)"
              variant="standard"
            />
            <TextField
              className={classes.textBox}
              id="fertilizerBrand"
              label="Fertilizer Brand"
              variant="standard"
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary">
              Water!
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
