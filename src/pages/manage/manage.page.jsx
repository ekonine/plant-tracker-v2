import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CustomCardList from '../../components/custom-card-list/custom-card-list.component.jsx';
import Detail from '../detail/detail.page.jsx';
import {Switch, Route, useParams} from 'react-router-dom';

//Styles
const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    width: '100vw'
  },
});

export default function Manage() {
  const classes = useStyles();

  //State
  const [plantData, setPlantData] = React.useState([
    {
      plantId: '0', 
      plantSpecies: 'Monstera',
      plantNickname: 'Monstera Guy',
      plantWaterStatus: 'Watered',
      plantPrice: 30,
      plantPriceCurr: 'CAD',
      plantHouseLoc: 'Main Bedroom Shelf',
      plantBoughtLoc: 'Hipster Shop'
    },
    {
      plantId: '1',
      plantSpecies: 'Zeze Plant',
      plantNickname: 'Zeze Guy',
      plantWaterStatus: 'Not Watered',
      plantPrice: 20,
      plantPriceCurr: 'CAD',
      plantHouseLoc: 'Living Room Shelf',
      plantBoughtLoc: 'Hipster Shop 2'
    },
  ]);

  //Router params
  const { plantId } = useParams();

  return (
    <div>
      <Switch>
        <Route exact path="/manage">
          <div className={classes.cardContainer}>
            <CustomCardList plantData={plantData}/>
          </div>
        </Route>
        <Route path="/manage/detail/:plantId">
          <Detail plantData={plantData}/>
        </Route>
      </Switch>
    </div>
  );
}
