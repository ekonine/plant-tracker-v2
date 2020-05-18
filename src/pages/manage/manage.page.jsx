import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CustomCard from '../../components/custom-card/custom-card.component.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardContainer: {
    marginTop: '20px'
  },
}));

export default function Manage() {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.cardContainer}>
        <CustomCard />
      </div>
    </div>
  );
}
