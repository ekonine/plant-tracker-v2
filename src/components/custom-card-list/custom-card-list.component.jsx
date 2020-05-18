import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import CustomCard from '../custom-card/custom-card.component';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  }
})

export default function CustomCardList({plantData}) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {
        plantData.map((plant, i) => {
          return(
            <CustomCard 
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
