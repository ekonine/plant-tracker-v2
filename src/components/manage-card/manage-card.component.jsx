import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: theme.spacing(20),
  },
}));

export default function CustomCard({
  plantId,
  plantSpecies,
  plantNickname,
  plantWaterStatus,
  user
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {plantNickname}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {plantWaterStatus}
        </Typography>
        <Typography variant="body2" component="p">
          {plantSpecies}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={{
          pathname: `/manage/detail/${user}/${plantId}`,
        }} style={{textDecoration: 'none'}}>
          <Button variant="contained" size="medium" color="primary">View</Button>
        </Link>
        <Link to={{
          pathname: `/manage/water/${user}/${plantId}`,
        }} style={{textDecoration: 'none'}}>
          <Button variant="contained" size="medium" color="secondary">Water</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
