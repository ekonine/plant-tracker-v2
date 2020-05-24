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


export default function Detail() {
  const classes = useStyles();
  const {push} = useHistory();
  const {plantId, user} = useParams();
  const [selectedPlant, setSelectedPlant] = React.useState(null);

  React.useEffect(() => {
    if (selectedPlant === null) {
      fetch(`http://localhost:3001/plants/${user}/${plantId}`, {
        method: 'get'
      })
        .then(promise => promise.json())
        .then(plant => {
          setSelectedPlant(plant)
        })
    }
  })

  if (!selectedPlant) {
    return <div></div>
  } else {
    return (
      <div className={classes.root}>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => {
          push(`/manage/${user}`)
        }}>
          Back to Manage List
        </Button>
        <Paper className={classes.paper}>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {selectedPlant.plantspecies}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom>
            {selectedPlant.plantnickname}
          </Typography>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            <b>House Location:</b> {selectedPlant.planthouseloc}
          </Typography>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            <b>Bought from:</b> {selectedPlant.plantboughtloc}
          </Typography>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            <b>Bought for:</b> {selectedPlant.plantprice}{' '}
            {selectedPlant.plantpricecurr}
          </Typography>
        </Paper>
        <Button className={classes.button} variant="contained" color="primary">
          Delete plant 
        </Button>
      </div>
    );
  }
}
