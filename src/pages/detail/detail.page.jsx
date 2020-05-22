import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useParams, useHistory} from 'react-router-dom';

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
    width: theme.spacing(60),
    height: theme.spacing(80),
  },
  title: {
    fontSize: 14,
  },
  button: {
    margin: theme.spacing(2),
  },
}));

export default function Detail({plantData}) {
  const classes = useStyles();
  const {plantId} = useParams();
  const {push} = useHistory();

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => {
        push('/manage')
      }}>
        Back to Manage List
      </Button>
      <Paper className={classes.paper}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {plantData[plantId].plantSpecies}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {plantData[plantId].plantNickname}
        </Typography>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          <b>House Location:</b> {plantData[plantId].plantHouseLoc}
        </Typography>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          <b>Bought from:</b> {plantData[plantId].plantBoughtLoc}
        </Typography>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          <b>Bought for:</b> {plantData[plantId].plantPrice}{' '}
          {plantData[plantId].plantPriceCurr}
        </Typography>
      </Paper>
    </div>
  );
}
