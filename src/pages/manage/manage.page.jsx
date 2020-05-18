import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CustomCardList from '../../components/custom-card-list/custom-card-list.component.jsx';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    width: '100vw'
  },
}));

export default function Manage() {
  const classes = useStyles();

  const [plantData, setPlantData] = React.useState([
    {
      plantSpecies: 'Monstera',
      plantNickname: 'Monstera Guy',
      plantWaterStatus: 'Watered',
    },
    {
      plantSpecies: 'Zeze Plant',
      plantNickname: 'Zeze Guy',
      plantWaterStatus: 'Not Watered',
    },
  ]);

  return (
    <div>
      <div className={classes.cardContainer}>
        <CustomCardList plantData={plantData}/>
      </div>
    </div>
  );
}
