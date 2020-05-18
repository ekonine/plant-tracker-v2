import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CustomCard({
  plantId,
  plantSpecies,
  plantNickname,
  plantWaterStatus,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {plantSpecies}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {plantWaterStatus}
        </Typography>
        <Typography variant="body2" component="p">
          {plantNickname}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/manage/detail/${plantId}`}>
          <Button size="medium">View</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
