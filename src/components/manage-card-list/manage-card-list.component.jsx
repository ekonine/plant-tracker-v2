import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import ManageCard from '../manage-card/manage-card.component';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '66vw'
  }
})

export default function ManageCardList({plantData}) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {
        plantData.map((plant, i) => {
          return(
            <ManageCard 
              key={i}
              plantId={i}
              plantSpecies={plant.plantSpecies}
              plantNickname={plant.plantNickname}
              plantWaterStatus={plant.plantWaterStatus}
            />
          );
        })
      }
    </div>
  );
}
