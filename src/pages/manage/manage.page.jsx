import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ManageCardList from '../../components/manage-card-list/manage-card-list.component.jsx';
import Detail from '../detail/detail.page.jsx';
import AddPlantForm from '../../components/add-plant-form/add-plant-form.component.jsx';
import {Switch, Route} from 'react-router-dom';
import QuickWaterButton from '../../components/quick-water-button/quick-water-button.component.jsx';
import WaterForm from '../../components/water-form/water-form.component.jsx';

//Styles
const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '25ch',
  },
}));

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
      plantBoughtLoc: 'Hipster Shop',
    },
    {
      plantId: '1',
      plantSpecies: 'Zeze Plant',
      plantNickname: 'Zeze Guy',
      plantWaterStatus: 'Not Watered',
      plantPrice: 20,
      plantPriceCurr: 'CAD',
      plantHouseLoc: 'Living Room Shelf',
      plantBoughtLoc: 'Hipster Shop 2',
    },
  ]);

  const [quickWaterToggle, setQuickWaterToggle] = React.useState(false);

  const handleWaterToggle = () => {
    setQuickWaterToggle(!quickWaterToggle);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/manage">
          <div className={classes.mainContainer}>
            <QuickWaterButton
              handleWaterToggle={handleWaterToggle}
              quickWaterToggle={quickWaterToggle}
              styles={classes.button}
            />
            <div className={classes.cardContainer}>
              <ManageCardList plantData={plantData} />
            </div>
          </div>
        </Route>
        <Route path="/manage/detail/:plantId">
          <Detail plantData={plantData} />
        </Route>
        <Route path="/manage/add">
          <AddPlantForm />
        </Route>
        <Route path="/manage/water/:plantId">
          <WaterForm />
        </Route>
      </Switch>
    </div>
  );
}
