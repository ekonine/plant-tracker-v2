import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ManageCardList from '../../components/manage-card-list/manage-card-list.component.jsx';
import Detail from '../detail/detail.page.jsx';
import AddPlantForm from '../../components/add-plant-form/add-plant-form.component.jsx';
import {Switch, Route} from 'react-router-dom';
import QuickWaterButton from '../../components/quick-water-button/quick-water-button.component.jsx';
import WaterForm from '../../components/water-form/water-form.component.jsx';
import Button from '@material-ui/core/Button';

//Styles
const useStyles = makeStyles(theme => ({
  subContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
    {
      plantId: '2',
      plantSpecies: 'Zeze Plant',
      plantNickname: 'Zeze Guy',
      plantWaterStatus: 'Not Watered',
      plantPrice: 20,
      plantPriceCurr: 'CAD',
      plantHouseLoc: 'Living Room Shelf',
      plantBoughtLoc: 'Hipster Shop 2',
    },
    {
      plantId: '3',
      plantSpecies: 'Zeze Plant',
      plantNickname: 'Zeze Guy',
      plantWaterStatus: 'Not Watered',
      plantPrice: 20,
      plantPriceCurr: 'CAD',
      plantHouseLoc: 'Living Room Shelf',
      plantBoughtLoc: 'Hipster Shop 2',
    },
    {
      plantId: '4',
      plantSpecies: 'Zeze Plant',
      plantNickname: 'Zeze Guy',
      plantWaterStatus: 'Not Watered',
      plantPrice: 20,
      plantPriceCurr: 'CAD',
      plantHouseLoc: 'Living Room Shelf',
      plantBoughtLoc: 'Hipster Shop 2',
    },
    {
      plantId: '5',
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
            <div className={classes.subContainer}>
              <Button className={classes.button} variant="contained" color="primary">
                Add Plant
              </Button>
              <QuickWaterButton
                handleWaterToggle={handleWaterToggle}
                quickWaterToggle={quickWaterToggle}
                styles={classes.button}
              />
            </div>
            <div>
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
