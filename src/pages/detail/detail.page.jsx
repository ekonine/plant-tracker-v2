import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {useParams} from 'react-router-dom';

//Styles
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
  paper: {
    padding: theme.spacing(4),
  },
  title: {
    fontSize: 14,
  },
}));

export default function Detail({plantData}) {
  const classes = useStyles();
  const {plantId} = useParams();

  return (
    <div className={classes.root}>
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
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom>
          <b>House Location:</b> {plantData[plantId].plantHouseLoc}
        </Typography>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom>
          <b>Bought from:</b> {plantData[plantId].plantBoughtLoc}
        </Typography>
        <Typography
          className={classes.title}
          color="textPrimary"
          gutterBottom>
          <b>Bought for:</b> {plantData[plantId].plantPrice} {plantData[plantId].plantPriceCurr}
        </Typography>
      </Paper>
    </div>
  );
}
